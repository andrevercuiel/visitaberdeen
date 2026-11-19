import {pageMetadata} from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import {activities} from "@/lib/activities";
import {attractions,BOOKING_URL} from "@/lib/content";
export const metadata=pageMetadata({title:"Things to Do in Aberdeen | Full Moon Walk & Karoo Activities",description:"Discover things to do in Aberdeen, Eastern Cape: the monthly 11 km and 21 km Full Moon Hike, Run & Cycle, Karoo hiking, biking, birdwatching, scenic farms and day trips.",path:"/activities"});
export const revalidate=3600;
export default function Activities(){
 return <main><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Activities",href:"/activities"}]}/>
 <section className="sub-hero"><div className="container"><p className="kicker">Stay. Explore. Experience.</p><h1>Things to do in Aberdeen</h1><p>Hiking, cycling, riding, stargazing and memorable Karoo getaways. Explore local experiences or join the monthly Full Moon Walk.</p><a className="btn btn-sand" href="/activities/moonwalk">Full Moon Walk details →</a></div></section>
 <section className="section" aria-label="Choose your activity"><div className="container"><h2>Choose your activity</h2><p>Select a logo to explore the activity and enquire about arrangements.</p><div className="activity-logo-grid">
 {activities.map(activity=><Link className="activity-logo-card" href={"/activities/"+activity.slug} key={activity.slug}><Image src={activity.logo} alt={activity.title+" — Aberdeen Self Catering"} width={900} height={900} sizes="(max-width: 600px) 45vw, (max-width: 1000px) 30vw, 23vw"/><h3>{activity.title}</h3><span>Explore activity →</span></Link>)}
 </div></div></section>
 <section className="section section-soft" id="moonwalk"><div className="container"><p className="kicker">Featured monthly event</p><h2>Full Moon Hike, Run & Cycle</h2><p className="lede">Explore the 11 km and 21 km event, departure times, organiser details and photographs on the dedicated event page.</p><Link className="btn" href="/activities/moonwalk">View Full Moon Walk details →</Link></div></section>
 <section className="section section-soft"><div className="container"><p className="kicker">Explore the Karoo</p><h2>Farm outings & outdoor experiences</h2><p className="lede">Explore local farms, trails and Karoo experiences. Contact the host to check access, current rates and schedules before travelling.</p><div className="room-grid">{attractions.map(a=><article className="page-card" key={a.title}><Image src={a.image} alt={a.title} loading="lazy" width={900} height={600} sizes="(max-width: 700px) 100vw, 33vw"/><h3>{a.title}</h3><p>{a.desc}</p><Link className="text-link" href="/contact-us">Ask about activities →</Link></article>)}</div></div></section>
 <section className="section"><div className="container"><p className="kicker">Day trips</p><h2>History, stars and open spaces</h2><div className="features"><div className="feature"><strong>Graaff-Reinet</strong><p>A nearby heritage town with historic buildings and local culture.</p></div><div className="feature"><strong>Valley of Desolation</strong><p>Visit the dramatic Camdeboo National Park viewpoints.</p></div><div className="feature"><strong>Nieu-Bethesda</strong><p>Art, heritage and distinctive Karoo village scenery.</p></div><div className="feature"><strong>Aberdeen</strong><p>Architecture, local art, birdwatching and stargazing.</p></div></div></div></section>
 <section className="promo"><div className="container promogrid"><div><h2>Stay and enjoy the Karoo</h2><p className="lede">Turn an outdoor experience into a comfortable overnight break.</p></div><div className="actions"><Link href="/accommodation" className="btn btn-sand">View accommodation</Link><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Book a stay ↗</a></div></div></section>
 </main>}

