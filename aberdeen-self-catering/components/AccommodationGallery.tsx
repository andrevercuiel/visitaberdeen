"use client";

import {useEffect, useState} from "react";
import Image from "next/image";

export default function AccommodationGallery({images,name}:{images:string[];name:string}) {
  const [selected,setSelected] = useState<number|null>(null);
  const count = images.length;

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (event:KeyboardEvent) => {
      if(event.key==="Escape") setSelected(null);
      if(event.key==="ArrowLeft") setSelected(current => current===null?null:(current-1+count)%count);
      if(event.key==="ArrowRight") setSelected(current => current===null?null:(current+1)%count);
    };
    document.addEventListener("keydown",onKeyDown);
    return () => document.removeEventListener("keydown",onKeyDown);
  },[selected,count]);

  if (!count) return null;

  return <>
    <div className="accom-photo-gallery">
      <div className="accom-photo-grid" aria-label={name+" photo gallery"}>
        {images.slice(0,5).map((src,index) => <button
          type="button"
          className={"accom-photo-tile"+(index===0?" accom-photo-main":"")}
          key={src+index}
          onClick={()=>setSelected(index)}
          aria-label={"View photo "+(index+1)+" of "+count+" of "+name}>
          <Image src={src} alt={name+" photograph "+(index+1)} priority={index===0} loading={index===0?undefined:"lazy"} decoding="async" width={1600} height={1100} sizes="(max-width: 700px) 100vw, 50vw"/>
        </button>)}
      </div>
      <button className="accom-photo-all" type="button" onClick={()=>setSelected(0)}>View all {count} photos</button>
    </div>
    {selected !== null && <div className="accom-lightbox" role="dialog" aria-modal="true" aria-label={name+" full photo gallery"} onClick={()=>setSelected(null)}>
      <div className="accom-lightbox-inner" onClick={event=>event.stopPropagation()}>
        <div className="accom-lightbox-top">
          <span>{name} · {selected+1} of {count}</span>
          <button type="button" onClick={()=>setSelected(null)} aria-label="Close photo gallery">Close ×</button>
        </div>
        <div className="accom-lightbox-photo"><Image src={images[selected]} alt={name+" photograph "+(selected+1)} width={1800} height={1200} sizes="(max-width: 700px) 100vw, 90vw"/></div>
        <div className="accom-lightbox-controls">
          <button type="button" onClick={()=>setSelected((selected-1+count)%count)} aria-label="Previous photo">← Previous</button>
          <button type="button" onClick={()=>setSelected((selected+1)%count)} aria-label="Next photo">Next →</button>
        </div>
      </div>
    </div>}
  </>;
}
