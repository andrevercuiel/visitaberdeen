import Link from "next/link";
import {BOOKING_URL,ADDRESS,PHONE,EMAIL} from "@/lib/content";
export default function Footer(){return <footer className="site-footer"><div className="container footer-grid">
 <div><h2>Aberdeen Self Catering</h2><p>Relax in the heart of the Karoo. Self-catering cottages, glamping and biker-friendly stays in historic Aberdeen.</p><p>{ADDRESS}</p></div>
 <div><h3>Explore</h3><Link href="/accommodation">Accommodation</Link><Link href="/activities">Activities & Full Moon Walk</Link><Link href="/event-venue">Event Venue</Link><Link href="/checkmate-coffee-cafe">Checkmate Coffee Café</Link><Link href="/blog">Karoo Journal</Link></div>
 <div><h3>Get in touch</h3><a href="tel:+27827990788">{PHONE}</a><a href={"mailto:"+EMAIL}>{EMAIL}</a><a href="https://wa.me/27827990788" target="_blank" rel="noopener noreferrer">WhatsApp enquiries ↗</a><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book online ↗</a></div>
 </div><div className="container footer-bottom">© {new Date().getFullYear()} Aberdeen Self Catering</div></footer>}

