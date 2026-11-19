"use client";
import {useState} from "react";
const photos={"Checkmate Coffee Café":"/photos/aberdeen/check-mate.webp"};
export default function VenuePhoto({name}) {
 const [failed,setFailed]=useState(false);
 if(!photos[name]||failed) return null;
 return <div className="businessCardPhoto"><img src={photos[name]} alt={name} loading="lazy" onError={()=>setFailed(true)}/></div>;
}
