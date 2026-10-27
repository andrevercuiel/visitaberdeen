export const metadata = {
  title: "Historic Architecture in Aberdeen",
  description: "Discover the 1898 Magistrate's Court, Victorian homes, church towers and Karoo heritage architecture in Aberdeen, Eastern Cape.",
  alternates: { canonical: "/architecture" },
  openGraph: { title: "Historic Architecture in Aberdeen", description: "Explore Aberdeen's Victorian houses, historic court and churches.", url: "https://visitaberdeen.co.za/architecture", type: "website", locale: "en_ZA", siteName: "Visit Aberdeen" }
};

const sites = [
  ["Dutch Reformed Church", "A landmark with a prominent tower in Aberdeen's skyline. Notice the stonework and the scale of its presence in the town centre."],
  ["1898 Magistrate's Court & Old Post Office", "A distinctive civic building completed in 1898, with ornamental details associated with late nineteenth-century revival architecture. A local legend says the building was meant for Grahamstown; this has not been supported by publicly available archival proof."],
  ["Wesleyan Methodist Church", "Stone construction, Gothic-style windows and distinctive belfry details reflect the church's long local history."],
  ["Anglican Church", "A historic place of worship reflecting nineteenth-century Anglican influence. Church names and specific construction dates need archival confirmation."],
  ["Pagel House", "A Victorian-era residence once known as Claremont House; admire the exterior without disturbing occupants."],
  ["Carmen Villa", "A heritage house associated with a spacious plan, ornate veranda and garden. Local stories speak of music and singing in its rooms."],
  ["Historic homes & town streets", "Look for decorative verandas, sash windows, ironwork, garden walls and other details that make Aberdeen's lived-in streets distinctive."],
  ["Market Hall", "Part of Aberdeen's late nineteenth-century commercial and gathering-place heritage."]
];

export default function Architecture() {
  return <main className="container pad"><div className="eyebrow">FAITH, STONE & STORIES</div>
    <h1 className="pageTitle">Architecture of Aberdeen</h1>
    <p className="lede">Walk through Aberdeen's heritage from public streets: Victorian houses, stone churches, historic civic buildings and unique Karoo details.</p>
    <div className="featureGrid">{sites.map(([title, detail]) => <article className="feature" key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div>
    <p className="fine">Buildings may be occupied, closed or privately owned. The Grahamstown 'wrong delivery' tale is presented only as local folklore. Confirm historical dates with archival sources where required.</p>
    <p><a className="btn" href="/visitor-routes#faith-stone-stories">Explore the heritage journey →</a></p>
  </main>;
}
