export const metadata = {
  title: "Historic Churches in Aberdeen",
  description: "Discover Aberdeen's Dutch Reformed Church, Wesleyan Methodist and Anglican heritage, and its handmade biblical panels.",
  alternates: { canonical: "/churches" },
  openGraph: { title: "Historic Churches in Aberdeen", description: "Church architecture, biblical textile art and Aberdeen's heritage.", url: "https://visitaberdeen.co.za/churches", type: "website", locale: "en_ZA", siteName: "Visit Aberdeen" }
};

const places = [
  ["Dutch Reformed Church", "Aberdeen's congregation was established in 1855. The church is known for its striking tower and place in the town's founding story. Local heritage accounts also describe a slight tower tilt and an olive tree linked by tradition to the Garden of Gethsemane."],
  ["Handmade biblical panels", "Church members created textile panels depicting biblical covenant stories. They are an example of faith expressed through local craftsmanship; ask about arranged viewing at the church hall."],
  ["Wesleyan Methodist Church", "The historic stone church, associated with the 1882–1883 period, features Gothic-style windows and belfry details, and reflects the Methodist community's part in Aberdeen history."],
  ["Anglican heritage", "Aberdeen's Anglican church represents another thread of nineteenth-century Christian life and British colonial influence. Community-supplied dates for St James and existing records for All Saints differ and should be checked before definitive publication."]
];

export default function Churches() {
  return <main className="container pad"><div className="eyebrow">FAITH, STONE & STORIES</div>
    <h1 className="pageTitle">Churches of Aberdeen</h1>
    <p className="lede">Explore places of faith that helped shape Aberdeen's architecture, neighbourhoods and community life.</p>
    <div className="featureGrid">{places.map(([title, detail]) => <article className="feature" key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div>
    <p className="fine">Please respect worship, private areas and opening arrangements. The olive-tree origin and some historic dates are local accounts requiring verification, not independently authenticated facts.</p>
    <p><a className="btn" href="/visitor-routes#faith-stone-stories">Discover the Faith, Stone & Stories route →</a></p>
  </main>;
}
