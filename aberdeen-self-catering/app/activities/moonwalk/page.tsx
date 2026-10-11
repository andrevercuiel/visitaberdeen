import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Monthly 21 km Full Moon Walk | Aberdeen Self Catering",
  description: "Join the monthly 21 km Full Moon walk from Aberdeen to Wynberg Guest Farm. Enquiries: Jurgens Strydom, 082 389 5770."
};
const phone = "27823895770";
const wa = "https://wa.me/" + phone + "?text=" + encodeURIComponent("Hello Jurgens, I would like to enquire about the next 21 km Full Moon walk from Aberdeen to Wynberg Guest Farm.");
export default function Moonwalk() {
  return <main>
    <header className="siteHeader">
      <a className="brand" href="/"><span className="brandMark">ASC</span><strong>Aberdeen Self Catering</strong></a>
      <nav className="desktopNav"><a href="/">Home</a><a href="/accommodation">Accommodation</a><a href="/activities">Activities</a><a href="/activities/moonwalk">Moonwalk</a></nav>
      <a className="headerCta" href={wa} target="_blank" rel="noreferrer">WhatsApp Jurgens</a>
    </header>
    <section className="section" style={{paddingTop:110}}>
      <p className="eyebrow dark">Things to do · Aberdeen</p>
      <h1>Monthly 21 km Full Moon Walk</h1>
      <p>Every month around Full Moon, we present a 21 km hike from Aberdeen to Wynberg Guest Farm.</p>
      <p>Contact Jurgens to confirm the next walk’s date, starting time, meeting point and participation details.</p>
      <p><strong>Enquiries:</strong> Jurgens Strydom · <a href="tel:+27823895770">082 389 5770</a></p>
      <div className="heroActions"><a className="btn darkBtn" href={wa} target="_blank" rel="noreferrer">Enquire on WhatsApp</a><a className="btn darkBtn" href="/activities">All activities</a></div>
    </section>
    <footer className="footer"><a href="/">Home</a><a href="/activities">Activities</a></footer>
  </main>;
}