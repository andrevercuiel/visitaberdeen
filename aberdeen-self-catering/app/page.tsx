import Link from "next/link";
import {pageMetadata} from "@/lib/seo";
import {BOOKING_URL,stays,cafePhotos,activityPhotos} from "@/lib/content";

export const metadata=pageMetadata({
 title:"Aberdeen Self Catering | Accommodation in Aberdeen, Eastern Cape",
 description:"Self-catering cottages and biker-friendly accommodation in Aberdeen, Eastern Cape. Explore accommodation, Checkmate Café and Karoo activities.",
 path:"/",
 image:"/media/2023/03/20230308_154512-scaled.webp"
});

export default function Home(){
 return <main className="simple-home">
  <section id="welcome" className="simple-home-intro">
   <div className="simple-home-wrap simple-home-intro-grid">
    <div className="simple-home-intro-copy">
     <p className="simple-home-overline">Aberdeen · Eastern Cape · Karoo</p>
     <h1>Aberdeen Self Catering</h1>
     <p className="simple-home-lead">Self-catering cottages and biker-friendly accommodation in historic Aberdeen.</p>
     <p className="simple-home-description">Enjoy a peaceful Karoo stay with welcoming hospitality, a swimming pool, braai facilities and an on-site café.</p>
     <div className="simple-home-buttons">
      <a className="simple-home-button simple-home-button-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Check availability ↗</a>
      <Link className="simple-home-button simple-home-button-secondary" href="/contact-us">Contact us</Link>
     </div>
    </div>
    <img className="simple-home-main-photo" src="/media/2023/03/20230308_154512-scaled.webp" alt="Aberdeen Self Catering garden and Karoo accommodation" width={760} height={480} decoding="async"/>
   </div>
  </section>
  <section className="simple-home-choices simple-home-wrap" aria-label="Explore Aberdeen Self Catering">
   <article className="simple-home-choice">
    <Link href="/accommodation" className="simple-home-choice-photo" aria-label="Explore accommodation"><img src={stays[0].images[0]} alt="Self-catering cottage at Aberdeen Self Catering" loading="lazy" width={600} height={390}/></Link>
    <div className="simple-home-choice-body">
     <h2><Link href="/accommodation">Accommodation</Link></h2>
     <p>Explore our cottages and accommodation for motorcycle travellers.</p>
     <Link className="simple-home-choice-link" href="/accommodation">View accommodation <span aria-hidden="true">→</span></Link>
    </div>
   </article>
   <article className="simple-home-choice">
    <Link href="/checkmate-coffee-cafe" className="simple-home-choice-photo" aria-label="Explore Checkmate Café"><img src={cafePhotos[0]} alt="Checkmate Coffee Café at Aberdeen Self Catering" loading="lazy" width={600} height={390}/></Link>
    <div className="simple-home-choice-body">
     <h2><Link href="/checkmate-coffee-cafe">Checkmate Café</Link></h2>
     <p>Enjoy coffee, breakfast and friendly Karoo hospitality in a relaxed setting.</p>
     <Link className="simple-home-choice-link" href="/checkmate-coffee-cafe">Explore Checkmate Café <span aria-hidden="true">→</span></Link>
    </div>
   </article>
   <article className="simple-home-choice">
    <Link href="/activities" className="simple-home-choice-photo" aria-label="Explore activities"><img src={activityPhotos[2]} alt="Hiking and outdoor activities in the Karoo near Aberdeen" loading="lazy" width={600} height={390}/></Link>
    <div className="simple-home-choice-body">
     <h2><Link href="/activities">Activities</Link></h2>
     <p>Discover the Full Moon Walk, hiking, cycling and other Karoo experiences.</p>
     <Link className="simple-home-choice-link" href="/activities">See things to do <span aria-hidden="true">→</span></Link>
    </div>
   </article>
  </section>
 </main>;
}
