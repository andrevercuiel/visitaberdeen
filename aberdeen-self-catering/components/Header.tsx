"use client";
import {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {BOOKING_URL} from "@/lib/content";
const links=[["/","Home"],["/accommodation","Accommodation"],["/checkmate-coffee-cafe","Checkmate Café"],["/activities","Activities"],["/contact-us","Contact"]];
export default function Header(){
 const [open,setOpen]=useState(false);
 const pathname=usePathname();
 const cycling=pathname==="/activities/cycling" || pathname.startsWith("/activities/cycling/");
 const walking=pathname==="/activities/walking" || pathname.startsWith("/activities/walking/") || pathname==="/activities/moonwalk";
 const logo=cycling?"aberdeen-cycling-logo.webp":walking?"aberdeen-walking-logo.webp":"aberdeen-guest-house-logo.png";
 const logoAlt=cycling?"Aberdeen Self Catering — Cycling":walking?"Aberdeen Self Catering — Walking and hiking":"Aberdeen Self Catering";
 return <header className="site-header">
   <div className="nav-wrap">
     <Link href="/" className="logo" aria-label="Aberdeen Self Catering home"><img className="site-logo-image" src={"/media/brand/"+logo} alt={logoAlt} width={104} height={104} /></Link>
     <nav className="nav-desktop" aria-label="Main menu">{links.map(([url,label])=><Link key={url} href={url}>{label}</Link>)}</nav>
     <a className="nav-book" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Check availability ↗</a>
     <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(value=>!value)} aria-label={open?"Close menu":"Open menu"}>{open?"✕":"☰"}</button>
   </div>
   {open&&<nav id="mobile-menu" className="nav-mobile" aria-label="Mobile menu">{links.map(([url,label])=><Link key={url} href={url} onClick={()=>setOpen(false)}>{label}</Link>)}<a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Check availability ↗</a></nav>}
 </header>;
}
