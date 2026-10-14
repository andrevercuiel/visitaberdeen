import Image from "next/image";
export default function Gallery({images,name}:{images:string[];name:string}){return <div className="gallery-grid">{images.map((src,i)=><a href={src} target="_blank" rel="noopener noreferrer" key={src+i} aria-label={"Open "+name+" image "+(i+1)}><Image src={src} alt={name+" photo "+(i+1)} loading="lazy" decoding="async" width={1280} height={880} sizes="(max-width: 700px) 46vw, (max-width: 1100px) 23vw, 23vw" /></a>)}</div>}

