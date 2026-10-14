import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AccommodationGallery from "@/components/AccommodationGallery";
import {accommodationSchema} from "@/lib/seo";
import {BOOKING_URL,EMAIL,type Stay} from "@/lib/content";

export default function DetailPage({stay}:{stay:Stay}) {
  const enquiry = "Hello, I would like to enquire about "+stay.name+" at Aberdeen Self Catering.";
  const whatsapp = "https://wa.me/27827990788?text="+encodeURIComponent(enquiry);
  const email = "mailto:"+EMAIL+"?subject="+encodeURIComponent(stay.name+" accommodation enquiry");
  return <main className="accom-page accom-detail-page">
    <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Accommodation",href:"/accommodation"},{label:stay.name,href:"/"+stay.slug}]}/>
    <JsonLd data={accommodationSchema(stay)}/>
    <div className="accom-shell">
      <header className="accom-detail-heading">
        <div>
          <p className="accom-overline">Aberdeen Self Catering · Eastern Cape</p>
          <h1>{stay.name}</h1>
          <p>{stay.intro}</p>
          <div className="accom-detail-tags">
            {stay.sleeps ? <span>Up to {stay.sleeps} guests</span> : <span>Group stays</span>}
            {stay.bedrooms ? <span>{stay.bedrooms} {stay.bedrooms===1?"bedroom":"bedrooms"}</span> : null}
            <span>{stay.label}</span>
          </div>
        </div>
        <div className="accom-detail-heading-action">
          <a className="accom-button accom-button-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Check availability ↗</a>
        </div>
      </header>
      <AccommodationGallery images={stay.images} name={stay.name}/>
      <div className="accom-content-grid">
        <div className="accom-content-main">
          <section aria-labelledby="about-this-stay" className="accom-detail-section">
            <h2 id="about-this-stay">About this accommodation</h2>
            <p className="accom-description">{stay.description}</p>
          </section>
          <section aria-labelledby="room-information" className="accom-detail-section">
            <h2 id="room-information">Room details</h2>
            <dl className="accom-room-details">
              <div><dt>Sleeping</dt><dd>{stay.beds}</dd></div>
              <div><dt>Bathroom</dt><dd>{stay.bathroom}</dd></div>
              <div><dt>Kitchen</dt><dd>{stay.kitchen}</dd></div>
              <div><dt>Outdoor</dt><dd>{stay.outdoor}</dd></div>
            </dl>
          </section>
          <section aria-labelledby="stay-facilities" className="accom-detail-section">
            <h2 id="stay-facilities">Facilities</h2>
            <ul className="accom-facilities">
              {stay.amenities.slice(0,8).map(item=><li key={item}>{item}</li>)}
            </ul>
            {stay.amenities.length>8 && <details className="accom-more-facilities">
              <summary>View all facilities ({stay.amenities.length})</summary>
              <ul className="accom-facilities accom-facilities-more">
                {stay.amenities.slice(8).map(item=><li key={item}>{item}</li>)}
              </ul>
            </details>}
          </section>
          <div className="accom-back"><Link href="/accommodation">← View all accommodation</Link></div>
        </div>
        <aside className="accom-booking-panel" aria-labelledby="accom-booking-title">
          <p className="accom-overline">Plan your stay</p>
          <h2 id="accom-booking-title">Book your stay</h2>
          <p>View dates and rates using our secure online booking service.</p>
          <a className="accom-button accom-button-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Check availability ↗</a>
          <div className="accom-booking-divider">Questions about this accommodation?</div>
          <a className="accom-button accom-button-outline" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp an enquiry ↗</a>
          <a className="accom-email-link" href={email}>Or send an email</a>
        </aside>
      </div>
    </div>
  </main>;
}
