"use client";
import {useState} from "react";
const photos={"Checkmate Coffee Café":"/photos/aberdeen/check-mate.webp","Kamdebo Padstal":"/photos/aberdeen/438119230_955417953257397_2807411528630045895_n.jpg","Karooh Kitchen":"/photos/aberdeen/683652353_122129872917012247_2164074108418375111_n.jpg","Windmill Coffee Shop":"/photos/aberdeen/591587034_122145364208939696_9146432885949232636_n.jpg"};
export default function VenuePhoto({name}) {
 const [failed,setFailed]=useState(false);
 if(!photos[name]||failed) return null;
 return <div className="businessCardPhoto"><img src={photos[name]} alt={name} loading="lazy" onError={()=>setFailed(true)}/></div>;
}
