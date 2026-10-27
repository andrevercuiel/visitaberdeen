export const metadata = {
  title: "Aberdeen Tourism Routes | Heritage, Food, Arts & Karoo Experiences",
  description: "Discover four visitor routes in Aberdeen, Eastern Cape: Faith, Stone & Stories; Authentic Karoo Flavours; Arts & Culture; and Light, Land & Silence.",
  alternates: { canonical: "/visitor-routes" },
  openGraph: {
    title: "Aberdeen Tourism Routes | Visit Aberdeen",
    description: "Explore Aberdeen's historic churches, Karoo food stops, local creativity and countryside experiences.",
    url: "https://visitaberdeen.co.za/visitor-routes",
    type: "website", locale: "en_ZA", siteName: "Visit Aberdeen"
  }
};

const routes = [
  {
    id: "faith-stone-stories", label: "HERITAGE & FAITH",
    title: "Faith, Stone & Stories", description: "An unhurried journey through Aberdeen's congregations, historic streets, monuments and local stories.",
    stops: [
      ["“Uberdeen” heritage ride", "A locally described heritage ride celebrating Aberdeen's architecture and stories. Enquire locally about whether the ride operates and how to arrange it.", "Service and booking details to be confirmed"],
      ["Dutch Reformed Church", "The congregation was founded in 1855. Discover the landmark church, its imposing tower, the local ‘leaning tower’ nickname and the story of an olive tree associated with the Garden of Gethsemane.", "The olive-tree provenance is a local tradition, not independently established"],
      ["Handmade biblical panels", "Textile panels crafted by congregation members tell biblical covenant stories and reflect generations of local skill and devotion.", "Church-hall access by arrangement"],
      ["Wesleyan Methodist Church", "Admire the historic stonework, Gothic-style windows and distinctive belfry associated with Aberdeen's nineteenth-century Methodist community.", "View respectfully; confirm access"],
      ["Anglican heritage", "Explore Aberdeen's Anglican church history and the wider British colonial influence on its architecture. The exact founding and construction dates should be checked against church records.", "Historical dates under review"],
      ["Aberdeen Cemetery", "Read the town's history in its memorials, family names and markers from the nineteenth century and South African War era.", "Be respectful of graves and visitors"],
      ["1898 Magistrate's Court & Old Post Office", "See Aberdeen's decorative late-Victorian civic architecture. A popular tale claims the building was intended for Grahamstown, but no public archival proof of the mix-up has been established.", "The Grahamstown story is presented as folklore"],
      ["Historic houses and Carmen Villa", "Look for decorative verandahs, garden settings and the prosperous domestic architecture of Aberdeen's past. Stories surrounding Carmen Villa are part of the town's oral history.", "Private properties: view from public areas only"]
    ],
    links: [["Listen to the eight-stop audio tour", "/discovery-route"], ["Historic architecture", "/architecture"], ["Churches of Aberdeen", "/churches"]]
  },
  {
    id: "authentic-karoo-flavours", label: "FOOD & HOSPITALITY",
    title: "Authentic Karoo Flavours", description: "Enjoy Aberdeen at the pace of a coffee break, breakfast, family meal or country farm-stall stop.",
    stops: [
      ["Check Mate Coffee Café", "Coffee, espresso drinks, breakfasts and light meals, with a relaxed atmosphere and a chance to enjoy a game of chess.", "Check current hours and menu"],
      ["Windmill Coffee & Deli", "A local coffee and deli stop associated with Aberdeen's historic Old Fort setting, offering breakfast and light meals.", "Check current hours and access"],
      ["Die Stal Sports & Cocktail Bar", "An informal social venue with a local sports-bar atmosphere, welcoming residents and travellers.", "Check current trading hours"],
      ["Kahroo Diner", "A casual pizza, fish and chicken food stop described as offering sit-down meals and food-truck catering for functions.", "Confirm venue name and location"],
      ["Kamdebo Padstal", "A country farm stall at the N9/R61 junction known for homestyle Karoo food, pantry products, pancakes and a welcoming road-trip stop.", "Confirm current menu and opening times"]
    ],
    links: [["Browse places to eat", "/eat-drink"], ["Plan a visit", "/plan-your-trip"]]
  },
  {
    id: "arts-crafts-culture", label: "CREATIVE ABERDEEN",
    title: "Arts, Crafts & Culture", description: "Meet local creativity, appreciate Karoo-inspired design and discover the town's wool-and-farming traditions.",
    stops: [
      ["Marguerite Beneke Art Gallery", "Discover original artworks in a peaceful Karoo setting. Enquire about viewing a selection of the artist's work and purchasing pieces.", "Visit by arrangement; confirm gallery access"],
      ["Art-I-Kapa & Equine Therapy", "A creative and wellbeing initiative combining art workshops, personal expression and interactions with horses in a quiet rural setting.", "Workshop dates and availability to be confirmed"],
      ["Maak Baie Mooi", "Explore a local creative initiative focused on décor, imaginative spaces, Karoo craft and beautifying the town.", "Check whether public visits or workshops are offered"],
      ["Vlam & Vesel Festival", "A festival concept centred on fire, hospitality, braai, wool, sheep farming and the community identity of Aberdeen.", "Annual event dates must be confirmed before travel"]
    ],
    links: [["Local products and art", "/local-products"], ["Events and festivals", "/events"]]
  },
  {
    id: "light-land-silence", label: "OUTDOORS & THE NIGHT SKY",
    title: "Light, Land & Silence", description: "A countryside journey inspired by photography, farming, dramatic light, moonlit walking and the Karoo's night skies.",
    stops: [
      ["Karoo photography & guided hiking", "Explore vast landscapes, textured terrain and the changing light at dawn or sunset. Ask locally about guided photography walks and short hikes.", "Do not enter farms without permission"],
      ["N9 Kaapse Poortjie working-farm experience", "The proposed experience includes a tractor-and-trailer journey to a lookout picnic spot, with sweeping views and the quiet of a working farm.", "Bookings, safety and operator availability to be confirmed"],
      ["Dark-moon stargazing", "On clear, moonless nights the Karoo sky can offer outstanding views of stars, constellations and the Milky Way away from town lighting.", "Weather dependent; arrange a safe viewing location"],
      ["Full-moon hiking", "Locally described guided full-moon walks include possible 5 km and 10 km options, with routes and distances subject to each organiser's announcement.", "Dates and distances must be confirmed with organisers"]
    ],
    links: [["Explore the Karoo", "/explore-the-karoo"], ["Check events", "/events"], ["Places to stay", "/stay"]]
  }
];

export default function VisitorRoutes() {
  return <main className="container pad">
    <div className="eyebrow">EXPLORE ABERDEEN YOUR WAY</div>
    <h1 className="pageTitle">Four Aberdeen visitor routes</h1>
    <p className="lede">Faith, heritage, local flavours, creativity and wide-open Karoo landscapes. Choose a theme and combine several stops for a morning, a day or a longer stay.</p>
    <nav className="categoryLinks" aria-label="Jump to visitor route">
      {routes.map(route => <a key={route.id} href={"#" + route.id}>{route.title} ↓</a>)}
    </nav>
    {routes.map(route => <section className="activitySection" id={route.id} key={route.id} aria-labelledby={route.id + "-heading"}>
      <div className="eyebrow">{route.label}</div>
      <h2 id={route.id + "-heading"}>{route.title}</h2>
      <p className="lede">{route.description}</p>
      <div className="featureGrid">
        {route.stops.map(([name, detail, note]) => <article className="feature" key={name}>
          <span>{route.label}</span>
          <h3>{name}</h3>
          <p>{detail}</p>
          <p className="fine"><strong>Visitor note:</strong> {note}</p>
        </article>)}
      </div>
      <div className="categoryLinks" aria-label={route.title + " related pages"}>
        {route.links.map(([name, href]) => <a href={href} key={href}>{name} →</a>)}
      </div>
    </section>)}
    <section className="visitStrip">
      <div><div className="eyebrow">MAKE IT YOUR JOURNEY</div><h2>Plan your visit</h2><p>These are themed suggestions, not a timed, booked or GPS-verified itinerary. Choose your own stops and confirm arrangements in advance.</p></div>
      <a className="btn" href="/plan-your-trip">Plan a visit →</a>
    </section>
    <p className="fine">Editorial note: The routes draw on community-provided tourism material. Some historic claims, business details, tour operations, dates and access arrangements still require confirmation by ATA or the relevant venue. No unconfirmed festival or activity date is advertised as scheduled.</p>
  </main>;
}
