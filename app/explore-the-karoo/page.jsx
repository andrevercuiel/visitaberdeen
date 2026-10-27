export const metadata = {
  title: "Explore the Karoo near Aberdeen",
  description: "Discover Kaapse Poortjie farm experiences, full-moon hikes, photography, stargazing and day trips from Aberdeen, Eastern Cape.",
  alternates: { canonical: "/explore-the-karoo" },
  openGraph: { title: "Explore the Karoo near Aberdeen", description: "Moonlit walks, dark skies, working-farm experiences and Camdeboo excursions.", url: "https://visitaberdeen.co.za/explore-the-karoo", type: "website", locale: "en_ZA", siteName: "Visit Aberdeen" }
};

const localExperiences = [
  ["Karoo photography and short hikes", "Capture dramatic sunrise and sunset light, open plains, dusty textures, distant hills and wildlife where local access permits."],
  ["Kaapse Poortjie working-farm experience", "Enquire about a working-farm visit on the N9, including a possible tractor-and-trailer ride to a picnic lookout over the plains."],
  ["Dark-moon stargazing", "On a clear moonless night, discover the Milky Way and constellations in the Karoo's darker countryside, away from lights."],
  ["Full-moon hiking", "Join a locally announced guided moonlit hike; possible route options include 5 km and 10 km, subject to the organiser's current schedule."],
  ["Wool and livestock country", "Ask hosts about Aberdeen's sheep-farming economy, wool story and seasonal rural experiences."]
];

const dayTrips = [
  ["Camdeboo National Park", "Karoo biodiversity and scenery near Graaff-Reinet."],
  ["Valley of Desolation", "Expansive views and dramatic rock formations."],
  ["Graaff-Reinet", "Historic architecture, museums and dining in the wider Camdeboo."],
  ["Nieu-Bethesda and the Owl House", "A village known for its art, history and local creative experiences."]
];

export default function Karoo() {
  return <main className="container pad"><div className="eyebrow">LIGHT, LAND & SILENCE</div><h1 className="pageTitle">Explore the Karoo</h1>
    <p className="lede">The quiet Karoo around Aberdeen is an experience in its own right: farm life, walking, beautiful light and star-filled skies.</p>
    <section className="activitySection"><h2>Closer to Aberdeen</h2><div className="featureGrid">{localExperiences.map(([title, detail]) => <article className="feature" key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
    <section className="activitySection"><h2>Explore further from Aberdeen</h2><div className="featureGrid">{dayTrips.map(([title, detail]) => <article className="feature" key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
    <div className="categoryLinks"><a href="/visitor-routes#light-land-silence">Light, Land & Silence route →</a><a href="/events">Upcoming outdoor events →</a><a href="/stay">Stay in the Karoo →</a></div>
    <p className="fine">Working farms are private. Farm experiences, tractor trips and guided walks are subject to host approval, suitable conditions and confirmed booking. Verify routes, distances, accessibility and night-walking safety before setting out.</p>
  </main>;
}
