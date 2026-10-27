export const metadata = {
  title: "Where to Eat in Aberdeen, Eastern Cape",
  description: "Explore Aberdeen coffee shops, cafés, Karoo meals, local dining, pubs and the Kamdebo Padstal farm-stall stop.",
  alternates: { canonical: "/eat-drink" },
  openGraph: { title: "Eat & Drink in Aberdeen", description: "Coffee shops, restaurants and authentic Karoo flavours in Aberdeen, Eastern Cape.", url: "https://visitaberdeen.co.za/eat-drink", type: "website", locale: "en_ZA", siteName: "Visit Aberdeen" }
};

const places = [
  ["Check Mate Coffee Café", "Aberdeen — precise address to be confirmed", "Fresh coffee, espresso drinks, breakfast and light meals, with a relaxed setting and chess."],
  ["Windmill Coffee & Deli", "8 Voortrekker Street (verify before travel)", "Breakfast, coffee and a deli-style offering in an Aberdeen heritage setting."],
  ["The Blue Door Aberdeen", "18 Voortrekker Street (verify before travel)", "A welcoming local coffee, breakfast and lunch stop."],
  ["Die Stal Sports & Cocktail Bar", "Aberdeen — precise address to be confirmed", "An informal social spot for drinks, conversation and watching sport."],
  ["Kahroo Diner (Pizza, Fish & Chicken)", "Aberdeen — precise address to be confirmed", "Casual pizza, fish and chicken meals; enquire about food-truck catering."],
  ["Kah-rooh Kitchen", "Aberdeen — precise address to be confirmed", "Previously listed local takeaway and meal option; current trading name and details need checking."],
  ["Kamdebo Padstal", "N9 / R61 junction, outside Aberdeen", "Karoo-style homemade food, pancakes, baked goods, preserves and local farm products."]
];

export default function Eat() {
  return <main className="container pad">
    <div className="eyebrow">AUTHENTIC KAROO FLAVOURS</div>
    <h1 className="pageTitle">Eat & Drink in Aberdeen</h1>
    <p className="lede">Take your time over a coffee, stop for a home-style meal, or explore local farm-stall favourites on your Karoo journey.</p>
    <div className="featureGrid">{places.map(([name, address, detail]) => <article className="feature" key={name}>
      <span>LOCAL FOOD & HOSPITALITY</span><h3>{name}</h3><p>{detail}</p>
      <p className="fine"><strong>Location:</strong> {address}</p>
      <p className="fine">Confirm address, opening hours, current menu and availability with the venue.</p>
    </article>)}</div>
    <div className="visitStrip"><div><h2>Take the Karoo Flavours Route</h2><p>Combine coffee, breakfast, lunch or a farm-stall stop into a relaxed Aberdeen visit.</p></div><a className="btn" href="/visitor-routes#authentic-karoo-flavours">Explore this route →</a></div>
    <p className="fine">Listings are a visitor guide, not verified ATA membership, current-hours confirmation or booking guarantee. “Kahroo Diner” and “Kah-rooh Kitchen” are shown separately pending confirmation of their trading identities. Claims about competition awards are withheld until independently checked.</p>
  </main>;
}
