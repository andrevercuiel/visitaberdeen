"use client";
import {useState} from "react";
import stays from "../../data/stays.json";
export default function Stay(){
 const [q,setQ]=useState("");
 const shown=stays.filter(s=>(s.name+" "+s.kind+" "+s.address).toLowerCase().includes(q.trim().toLowerCase()));
 return <main className="container pad quietContent">
   <div className="eyebrow">REST IN THE KAROO</div><h1 className="pageTitle">Stay in Aberdeen</h1>
   <p className="lede">From in-town cottages to quiet farm stays. Browse local options and book directly with the accommodation provider.</p>
   <div className="staySearch"><label htmlFor="stay-search">Find a place to stay</label><input id="stay-search" className="search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search name, type or location"/></div>
   <p className="fine">{shown.length} places listed · Not all are ATA members</p>
   <div className="stayCompactGrid">
     {shown.map(s=><article className="stayCompact" key={s.name}>
        {s.image?<div className="stayCompactPhoto"><img src={s.image} alt={s.name} loading="lazy" onError={e=>{e.currentTarget.style.display="none"}}/></div>:<div className="stayCompactPhoto stayPlaceholder" aria-hidden="true">ABERDEEN</div>}
        <div className="stayCompactText"><span className="eyebrow">{s.kind}</span><h2>{s.name}</h2><p className="fine">{s.address}</p>
          {s.url&&<a href={s.url} target="_blank" rel="noopener noreferrer">View accommodation →</a>}</div>
     </article>)}
   </div>
   {!shown.length&&<p className="emptyState">No matching stays. Try another name or location.</p>}
   <p className="fine">Check availability, prices, accessibility and booking conditions directly with each property.</p>
 </main>;
}
