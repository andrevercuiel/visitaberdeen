import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {BOOKING_URL} from "@/lib/content";
type Props={title:string;path:string;intro:string;image:string;imageAlt:string;experiences:{title:string;text:string}[]};
export default function ActivityLanding({title,path,intro,image,imageAlt,experiences}:Props){
 return <main>
 <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Activities",href:"/activities"},{label:title,href:path}]}/>
 <section className="sub-hero"><div className="container"><p className="kicker">Explore from Aberdeen Self Catering</p><h1>{title} in the Karoo</h1><p>{intro}</p><div className="actions"><a href={"https://wa.me/27823895770?text="+encodeURIComponent("Hello Jurgens, please send me information about "+title.toLowerCase()+" in Aberdeen.")} target="_blank" rel="noopener noreferrer" className="btn btn-sand">Enquire with Jurgens ↗</a><Link href="/activities" className="btn btn-outline">All activities</Link></div></div></section>
 <section className="section"><div className="container two-col"><div><p className="kicker">Make time to explore</p><h2>Your Karoo adventure starts here</h2>{experiences.map(item=><div key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}</div><Image className="activity-landscape" src={image} alt={imageAlt} width={1200} height={900} sizes="(max-width:700px) 100vw, 50vw" priority/></div></section>
 <section className="section section-soft"><div className="container"><p className="kicker">A monthly experience</p><h2>Join the Full Moon Hike, Run & Cycle</h2><p className="lede">An overnight event from Aberdeen Self Catering to Wynberg Guest Farm, with 11 km and 21 km options. View the event page for dates, departure times and arrangements.</p><Link className="btn" href="/activities/moonwalk">Full Moon Walk details →</Link></div></section>
 <section className="promo"><div className="container promogrid"><div><h2>Stay a little longer</h2><p className="lede">Combine your activity with a comfortable stay in Aberdeen.</p></div><div className="actions"><Link href="/accommodation" className="btn btn-sand">View accommodation</Link><a className="btn btn-outline" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Check availability ↗</a></div></div></section>
 </main>;
}
