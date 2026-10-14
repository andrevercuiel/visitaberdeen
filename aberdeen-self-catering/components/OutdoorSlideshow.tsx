"use client";

import Image from "next/image";
import {useEffect,useState} from "react";

const slides=[
 {src:"/media/outdoor/outdoor-fish-pond.webp",alt:"Fish pond surrounded by plants and garden seating",label:"Fish pond"},
 {src:"/media/outdoor/outdoor-pool.webp",alt:"Swimming pool in the shaded garden",label:"Swimming pool"},
 {src:"/media/outdoor/outdoor-garden.webp",alt:"Flowering garden and outdoor seating at Aberdeen Self Catering",label:"Garden"},
 {src:"/media/outdoor/outdoor-lapa-braai.webp",alt:"Covered lapa with braai and outdoor seating",label:"Lapa and braai"},
 {src:"/media/outdoor/outdoor-courtyard.webp",alt:"Thatched lapa, fish pond and secure courtyard entrance",label:"Courtyard"},
] as const;

export default function OutdoorSlideshow(){
 const [index,setIndex]=useState(0);
 const [playing,setPlaying]=useState(true);
 const [reducedMotion,setReducedMotion]=useState(false);

 useEffect(()=>{
  const query=window.matchMedia("(prefers-reduced-motion: reduce)");
  const update=()=>setReducedMotion(query.matches);
  update();
  query.addEventListener("change",update);
  return()=>query.removeEventListener("change",update);
 },[]);

 useEffect(()=>{
  if(!playing||reducedMotion)return;
  const timer=window.setInterval(()=>setIndex(current=>(current+1)%slides.length),5000);
  return()=>window.clearInterval(timer);
 },[playing,reducedMotion]);

 const show=(next:number)=>setIndex((next+slides.length)%slides.length);
 const slide=slides[index];

 return <section className="outdoor-section" aria-labelledby="outdoor-title">
  <div className="outdoor-section-inner">
   <div className="outdoor-heading">
    <h2 id="outdoor-title">Enjoy the outdoor spaces</h2>
    <p>Relax by the fish pond, take a swim, explore the garden or gather under the lapa.</p>
   </div>
   <div className="outdoor-slideshow" role="region" aria-roledescription="carousel" aria-label="Outdoor facilities photo slideshow" onMouseEnter={()=>setPlaying(false)} onFocusCapture={()=>setPlaying(false)}>
    <Image key={slide.src} className="outdoor-slide-image" src={slide.src} alt={slide.alt} fill sizes="(max-width: 700px) 92vw, 86vw"/>
    <div className="outdoor-slide-shade" aria-hidden="true"/>
    <div className="outdoor-slide-caption" aria-live="off">{slide.label}</div>
    <div className="outdoor-slide-count" aria-label={`Photo ${index+1} of ${slides.length}`}>{index+1} / {slides.length}</div>
    <div className="outdoor-slide-arrows">
     <button type="button" aria-label="Previous outdoor photo" onClick={()=>show(index-1)}>‹</button>
     <button type="button" aria-label="Next outdoor photo" onClick={()=>show(index+1)}>›</button>
    </div>
   </div>
   <div className="outdoor-slide-controls">
    <button className="outdoor-slide-play" type="button" onClick={()=>setPlaying(value=>!value)} aria-pressed={!playing}>
     {playing?"Pause slideshow":"Play slideshow"}
    </button>
    <div className="outdoor-slide-dots" aria-label="Choose a photo">
     {slides.map((item,i)=><button key={item.src} className="outdoor-slide-dot" type="button" aria-label={`Show ${item.label} photo`} aria-current={index===i?"true":"false"} onClick={()=>show(i)}/>)}
    </div>
   </div>
  </div>
 </section>;
}
