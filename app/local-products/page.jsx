export const metadata = {
  title: "Local Art, Crafts and Karoo Products in Aberdeen",
  description: "Explore Aberdeen's local artists, Marguerite Beneke, Art-I-Kapa, Maak Baie Mooi, crafts, preserves and handmade Karoo products.",
  alternates: { canonical: "/local-products" },
  openGraph: { title: "Arts & Local Products in Aberdeen", description: "Meet Aberdeen's creativity, local art and Karoo-made products.", url: "https://visitaberdeen.co.za/local-products", type: "website", locale: "en_ZA", siteName: "Visit Aberdeen" }
};

const places = [
  ["Marguerite Beneke Art Gallery", "Discover artworks inspired by light, expression and the Karoo. Enquire about gallery opening arrangements and availability of pieces for sale."],
  ["Art-I-Kapa & Equine Therapy", "An initiative centred on creative workshops, wellbeing and horse-assisted experiences. Contact the operator about sessions and suitability."],
  ["Maak Baie Mooi", "A community creative initiative highlighting décor, locally inspired design, craftsmanship and village beautification."],
  ["Karoo crafts and gifts", "Find locally made keepsakes, decorative pieces, gifts and artisanal products at participating shops and studios."],
  ["Preserves and farm products", "Look for locally sourced food, preserves, honey, baking and other Karoo pantry favourites; ask vendors about origin."],
  ["Wool and farming heritage", "Learn how sheep farming and fibre have shaped the identity of the Aberdeen district and inspired the Vlam & Vesel festival concept."]
];

export default function Products() {
  return <main className="container pad"><div className="eyebrow">ARTS, CRAFTS & CULTURE</div>
    <h1 className="pageTitle">Local Art & Karoo Products</h1>
    <p className="lede">From fine art and creative workshops to handmade décor, wool heritage and local food, Aberdeen has stories to take home.</p>
    <div className="featureGrid">{places.map(([title, detail]) => <article className="feature" key={title}><h3>{title}</h3><p>{detail}</p><p className="fine">Enquire about access, participation or retail availability before visiting.</p></article>)}</div>
    <p><a className="btn" href="/visitor-routes#arts-crafts-culture">Explore the Arts & Culture route →</a></p>
    <p className="fine">These are curated leads from local tourism material; active trading and operating details await confirmation. Made in Aberdeen, made elsewhere in the Karoo and merely sold in Aberdeen should not be conflated.</p>
  </main>;
}
