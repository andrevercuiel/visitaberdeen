// One-time migration tool for ASC's original media into repo-owned public assets.
// Run from the aberdeen-self-catering project directory. Only commit when ALL expected images download.
import {readFile,writeFile,mkdir,stat} from "node:fs/promises";
import path from "node:path";

const originals=["lib/content.ts","app/page.tsx"];
const originalRegex=/https:\/\/www\.aberdeenselfcatering\.co\.za\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/[A-Za-z0-9_.%-]+|https:\/\/aberdeenselfcatering\.odoo\.com\/web\/image\/[A-Za-z0-9_./%-]+/g;
const source={};
for(const file of originals)source[file]=await readFile(file,"utf8");
const sources=[...new Set(Object.values(source).flatMap(s=>s.match(originalRegex)||[]))];
const target=(url)=>{
  if(url.includes("/wp-content/uploads/"))return "/media/"+url.split("/wp-content/uploads/")[1];
  if(url.includes("/aberdeen_full_moon_walk_poster.png"))return "/media/aberdeen_full_moon_walk_poster.png";
  throw Error("Unsupported image URL: "+url);
};
const failures=[];
let n=0;
const queue=[...sources];
async function download(url){
 const dest=path.join("public",target(url).replace(/^\//,""));
 await mkdir(path.dirname(dest),{recursive:true});
 let last;
 for(let attempt=0;attempt<3;attempt++){
  try{
   const c=new AbortController();const t=setTimeout(()=>c.abort(),30000);
   let response;
   try{response=await fetch(url,{signal:c.signal,headers:{"User-Agent":"Mozilla/5.0 (compatible; ASC-Media-Migration/1.0)","Accept":"image/avif,image/webp,image/*,*/*;q=0.8"}});}
   finally{clearTimeout(t);}
   if(!response.ok)throw Error("HTTP "+response.status);
   const mime=response.headers.get("content-type")||"";
   if(!mime.startsWith("image/"))throw Error("Unexpected MIME type: "+mime);
   const buffer=Buffer.from(await response.arrayBuffer());
   if(buffer.length<1500 || buffer.length>20000000)throw Error("Unexpected image size "+buffer.length);
   await writeFile(dest,buffer);
   n++;return;
  }catch(err){last=err;await new Promise(res=>setTimeout(res,750*(attempt+1)));}
 }
 failures.push(url+" — "+String(last));
}
await Promise.all(Array.from({length:5},async()=>{while(queue.length){let next=queue.shift();if(next)await download(next);}}));
console.log("Media downloaded:",n,"of",sources.length);
if(failures.length){console.error("Missing images:\n"+failures.join("\n"));process.exit(1);}
for(const [file,contents] of Object.entries(source)){
 let next=contents;
 for(const url of sources){next=next.replaceAll(url,target(url));}
 await writeFile(file,next,"utf8");
}
console.log("All assets stored in public/media and TypeScript references rewritten to local URLs.");
