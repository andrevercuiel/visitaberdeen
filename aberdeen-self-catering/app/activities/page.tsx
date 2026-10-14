import type {Metadata} from "next";
import {pageMetadata} from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import {moonWalkEventSchema} from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import {attractions,MOON_WALK_POSTER,FULL_MOON_WHATSAPP,BOOKING_URL} from "@/lib/content";
export const metadata=pageMetadata({title:"Things to Do in Aberdeen | Full Moon Walk & Karoo Activities",description:"Discover things to do in Aberdeen, Eastern Cape: the monthly 11 km and 21 km Full Moon Hike, Run & Cycle, Karoo hiking, biking, birdwatching, scenic farms and day trips.",path:"/activities"});
export const revalidate=3600;
const moonWalkPhotos=[
 {src:"/media/full-moon-walk-hikers-at-night.webp",alt:"Full Moon Walk hikers gathered together after a night walk",caption:"A group of walkers at the end of a night on the trail."},
 {src:"/media/full-moon-walk-group-at-farm-night.webp",alt:"Full Moon Walk group gathered outside a Karoo farm building at night",caption:"Walkers meet up at a Karoo farm along the route."},
 {src:"/media/full-moon-walk-sunrise-hikers.webp",alt:"Full Moon Walk participants walking together at sunrise in the Karoo",caption:"The Karoo landscape at first light."},
 {src:"/media/full-moon-walk-sunrise-landscape.webp",alt:"Sunrise over the Karoo mountains beside a walking track",caption:"Sunrise over the open Karoo countryside."},
 {src:"/media/full-moon-walk-finish-group.webp",alt:"Full Moon Walk participants wearing event shirts together after the walk",caption:"A shared meal and a chance to celebrate the walk."},
];
export default function Activities(){
 const octoberWalkCurrent=Date.now()<Date.parse("2026-10-25T04:30:00+02:00");
 return <main>{octoberWalkCurrent&&<JsonLd data={moonWalkEventSchema()}/>}<Breadcrumbs items={[{label:"Home",href:"/"},{label:"Activities",href:"/activities"}]}/>
 <section className="sub-hero"><div className="container"><p className="kicker">Stay. Explore. Experience.</p><h1>Things to do in Aberdeen</h1><p>Hiking, cycling, riding, stargazing and memorable Karoo getaways. Explore local experiences or join the monthly Full Moon Walk.</p><a className="btn btn-sand" href="#moonwalk">Full Moon Walk details ↓</a></div></section>
 <section className="section" id="moonwalk"><div className="container two-col"><div><p className="kicker">Featured monthly event</p><h2>Monthly Full Moon Hike, Run & Cycle</h2><p className="lede">An overnight Karoo event from Aberdeen Self Catering to Wynberg Guest Farm, with 11 km and 21 km route options.</p>{octoberWalkCurrent?<>
 <div className="stat-row"><div><strong>24 Oct 2026</strong><br/>Event date</div><div><strong>23:00</strong><br/>Assembly opens</div><div><strong>11 km / 21 km</strong><br/>Route options</div></div>
 <p style={{marginTop:22}}>Assemble at Aberdeen Self Catering from 23:00 on Saturday, 24 October. Hikers depart at 23:59; runners depart at 02:00 and cyclists at 03:00 on Sunday, 25 October. The halfway stop is De Kruis Farm Stay (about 02:00), with arrival at Wynberg Guest Farm around 04:30. Entry is R45 per person, cash.</p>
 <p>A support vehicle is available for extra luggage. There is no medical support on the route; sign the register and indemnity before departure. Coffee is provided at the start and hikers can get coffee at the halfway stop. Breakfast and refreshments are for sale at the finish. Return transport is available for R50 per person at 10:00, or arrange your own transport. Farm accommodation: 082 723 0025.</p>
 <p><strong>Book by WhatsApping your name to Jurgens Strydom: 082 389 5770.</strong></p>
 </>:<>
 <p>For upcoming monthly walks, contact Jurgens Strydom on 082 389 5770 for dates and arrangements.</p>
 </>}<div className="actions"><a href={FULL_MOON_WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn">WhatsApp Jurgens</a><a href="tel:+27823895770" className="btn btn-outline">Call the organiser</a></div></div><Image src={MOON_WALK_POSTER} alt="Official Full Moon Walk poster" loading="lazy" width={1200} height={2000} sizes="(max-width: 768px) 100vw, 50vw" style={{height:600,width:"auto",maxWidth:"100%",objectFit:"contain",background:"#f6f4ec"}} /></div></section>
 <section className="section section-soft moonwalk-gallery-section"><div className="container"><p className="kicker">Walk memories</p><h2>Moments from the Full Moon Walk</h2><p className="lede">A look back at the people, night skies and Karoo sunrise along the route.</p><div className="moonwalk-gallery">{moonWalkPhotos.map(photo=><figure className="moonwalk-gallery-item" key={photo.src}><Image src={photo.src} alt={photo.alt} loading="lazy" width={1200} height={800} sizes="(max-width: 700px) 50vw, (max-width: 1000px) 33vw, 25vw"/><figcaption>{photo.caption}</figcaption></figure>)}</div></div></section>
 <section className="section section-soft"><div className="container"><p className="kicker">Explore the Karoo</p><h2>Farm outings & outdoor experiences</h2><p className="lede">Explore local farms, trails and Karoo experiences. Contact the host to check access, current rates and schedules before travelling.</p><div className="room-grid">{attractions.map(a=><article className="page-card" key={a.title}><Image src={a.image} alt={a.title} loading="lazy" width={900} height={600} sizes="(max-width: 700px) 100vw, 33vw"/><h3>{a.title}</h3><p>{a.desc}</p><Link className="text-link" href="/contact-us">Ask about activities →</Link></article>)}</div></div></section>
 <section className="section"><div className="container"><p className="kicker">Day trips</p><h2>History, stars and open spaces</h2><div className="features"><div className="feature"><strong>Graaff-Reinet</strong><p>A nearby heritage town with historic buildings and local culture.</p></div><div className="feature"><strong>Valley of Desolation</strong><p>Visit the dramatic Camdeboo National Park viewpoints.</p></div><div className="feature"><strong>Nieu-Bethesda</strong><p>Art, heritage and distinctive Karoo village scenery.</p></div><div className="feature"><strong>Aberdeen</strong><p>Architecture, local art, birdwatching and stargazing.</p></div></div></div></section>
 <section className="promo"><div className="container promogrid"><div><h2>Stay and enjoy the Karoo</h2><p className="lede">Turn an outdoor experience into a comfortable overnight break.</p></div><div className="actions"><Link href="/accommodation" className="btn btn-sand">View accommodation</Link><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Book a stay ↗</a></div></div></section>
 </main>}

