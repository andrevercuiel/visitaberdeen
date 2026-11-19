"use client";
import {useState} from "react";
import stays from "../../data/stays.json";
import members from "../../data/ata-members.json";
const normalize = name => name.toLowerCase().replace(/ \(aberdeen\)$/i,"").split(" — ")[0].replace(/\s/g,"");
const memberStays = stays.filter(s=>s.ataMember && members.some(m=>normalize(m.name)===normalize(s.name))).map(s=>{const m=members.find(m=>normalize(m.name)===normalize(s.name));const links=[...(m.links||[]),...(s.links||[])].filter((l,i,all)=>all.findIndex(x=>x[1]===l[1])===i);return {...s,links};});
export default function Stay(){
 const [q,setQ]=useState("");
 const shown=memberStays.filter(s=>(s.name+" "+s.kind+" "+s.address).toLowerCase().includes(q.trim().toLowerCase()));
 return <main className="container pad quietContent">
   <div className="eyebrow">REST IN THE KAROO</div><h1 className="pageTitle">Stay in Aberdeen</h1>
   <p className="lede">From in-town cottages to quiet farm stays. Discover accommodation offered exclusively by members of the Aberdeen Tourism Association.</p>
   <div className="staySearch"><label htmlFor="stay-search">Find a place to stay</label><input id="stay-search" className="search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search name, type or location"/></div>
   <p className="fine">{shown.length} ATA member accommodation options</p>
   <div className="stayCompactGrid">
     {shown.map(s=><article className="stayCompact" key={s.name}>
        {s.ataMember&&s.image?<div className="stayCompactPhoto"><img src={s.image} alt={s.name} loading="lazy" onError={e=>{e.currentTarget.style.display="none";e.currentTarget.parentElement.classList.add("stayPlaceholder");e.currentTarget.parentElement.setAttribute("aria-label","Property photo unavailable");e.currentTarget.parentElement.append("Photo coming soon")}}/></div>:<div className="stayCompactPhoto stayPlaceholder" >Photo coming soon</div>}
        <div className="stayCompactText"><span className="eyebrow">{s.ataMember?"ATA member 2026":"Other local listing"}</span><h2>{s.name}</h2>{s.ataMember&&<><p className="fine">{s.kind} · {s.address}</p>{s.description&&<p>{s.description.split("\n\n")[0]}</p>}{s.descriptionAf&&<details><summary>About this accommodation / Meer oor hierdie verblyf</summary><div lang="en">{s.description.split("\n\n").slice(1).map((paragraph,i)=><p key={i}>{paragraph}</p>)}</div><details lang="af"><summary>Lees in Afrikaans</summary>{s.descriptionAf.split("\n\n").map((paragraph,i)=><p key={i}>{paragraph}</p>)}</details></details>}<div className="businessLinks">{s.links?.map(([label,url])=><a key={url} href={url} target={url.startsWith("http")?"_blank":undefined} rel="noopener noreferrer">{url.startsWith("mailto:")?url.slice(7):label} ↗</a>)}</div></>}</div>
     </article>)}
   </div>
   {!shown.length&&<p className="emptyState">No matching stays. Try another name or location.</p>}
   <p className="fine">Check availability, prices, accessibility and booking conditions directly with each property.</p>
 </main>;
}
