import Breadcrumbs from "@/components/Breadcrumbs";
import GuestRatings from "@/components/GuestRatings";
import AccommodationCard from "@/components/AccommodationCard";
import {stays, BOOKING_URL, PHONE} from "@/lib/content";
import {pageMetadata} from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Accommodation in Aberdeen, Eastern Cape | Cottages & Biker Stays",
  description: "Browse self-catering cottages and biker-only accommodation in Aberdeen, Eastern Cape. See photos, facilities and check availability.",
  path: "/accommodation"
});

export default function Accommodation() {
  return <main className="accom-page">
    <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Accommodation",href:"/accommodation"}]}/>
    <section className="accom-heading accom-shell">
      <div className="accom-heading-copy">
        <p className="accom-overline">Aberdeen · Eastern Cape · Karoo</p>
        <h1>Accommodation in Aberdeen</h1>
        <p>Explore our self-catering cottages and biker-friendly stays in the Karoo.</p>
      </div>
      <div className="accom-heading-action">
        <a href={BOOKING_URL} className="accom-button accom-button-primary" target="_blank" rel="noopener noreferrer">Check availability <span aria-hidden="true">↗</span></a>
        <span>View available dates and rates online</span>
      </div>
    </section>
    <GuestRatings/>
    <section className="accom-shell accom-list-section" aria-labelledby="available-stays">
      <div className="accom-list-heading">
        <h2 id="available-stays">Choose your stay</h2>
        <p>{stays.length} accommodation options</p>
      </div>
      <div className="accom-list">
        {stays.map(stay => <AccommodationCard key={stay.slug} stay={stay}/>)}
      </div>
    </section>
    <section className="accom-shell accom-enquiry-panel" aria-label="Booking assistance">
      <div>
        <h2>Need help choosing?</h2>
        <p>Contact our team about your dates, group size or specific accommodation needs.</p>
      </div>
      <div className="accom-enquiry-actions">
        <a className="accom-button accom-button-primary" href="https://wa.me/27827990788" target="_blank" rel="noopener noreferrer">WhatsApp us ↗</a>
        <a className="accom-button accom-button-outline" href={"tel:"+PHONE.replace(/\s/g,"")}>Call us</a>
      </div>
    </section>
  </main>;
}
