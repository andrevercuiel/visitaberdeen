export const metadata = {
  title: "Things to Do in Aberdeen, Eastern Cape",
  description: "Discover heritage walks, churches, local artists, Karoo experiences, gardens and outdoor activities in Aberdeen, Eastern Cape.",
  alternates: { canonical: "/things-to-do" },
  openGraph: { title: "Things to Do in Aberdeen, Eastern Cape", description: "Discover heritage walks, churches, local artists, Karoo experiences, gardens and outdoor activities in Aberdeen, Eastern Cape.", url: "https://visitaberdeen.co.za/things-to-do", type: "website", locale: "en_ZA", siteName: "Visit Aberdeen" }
};

const groups = [
  {
    id: "heritage", label: "In the village", heading: "Heritage, stories & beautiful streets",
    items: [
      ["Historic architecture walk", "Explore Victorian, Edwardian and traditional Karoo buildings from public streets.", "/architecture", "Self-guided"],
      ["Eight-stop audio Discovery Route", "Listen to historical stories at each stop on a walk or drive through town.", "/discovery-route", "Self-guided"],
      ["Dutch Reformed Church", "Admire the prominent steeple and striking church architecture.", "/churches", "Check visiting access"],
      ["Biblical textile artworks", "Ask about the collection of biblical panels in the Dutch Reformed Church hall.", "/churches", "Access by arrangement"],
      ["Other historic churches", "Discover the town’s Anglican and Wesleyan Methodist heritage.", "/churches", "Respect services and access"],
      ["Old magistrate’s court & post office", "Look closely at the decorative details of Aberdeen’s historic civic buildings.", "/discovery-route", "Exterior viewing"],
      ["Historic homes & Pagel House", "Learn how farming, commerce and surprising characters shaped the town.", "/discovery-route", "Private properties — exterior only"],
      ["Aberdeen’s historic cemeteries", "Reflect on family history and Anglo-Boer War stories in the old burial grounds.", "/discovery-route", "Respectful visits"],
      ["Aberdeen Heritage Archive", "Explore the possibility of viewing historical records and old photographs.", "/stories", "Enquire before visiting"]
    ]
  },
  {
    id: "culture", label: "Local experiences", heading: "Arts, flavours & village life",
    items: [
      ["Artists’ studios", "Discover local artists working in glass, ceramics and other creative media.", "/local-products", "Visits by arrangement"],
      ["Local crafts & Karoo products", "Browse handmade items, gifts and locally produced food.", "/local-products", "Check outlets and opening times"],
      ["Breakfast, coffee or a Karoo lunch", "Stop at an Aberdeen café or eatery and enjoy the town at an easy pace.", "/eat-drink", "Check opening times"],
      ["Open gardens & garden visits", "Watch for organised garden days and seasonal village garden experiences.", "/events", "Event dates to be confirmed"],
      ["Markets, performances & town events", "Discover local gatherings, festivals and special tourism occasions.", "/events", "Check confirmed dates"],
      ["Stories of Aberdeen", "Meet the history and personalities behind this unusual Karoo town.", "/stories", "Read and discover"]
    ]
  },
  {
    id: "nature", label: "Town & surrounds", heading: "Outdoors and the Karoo countryside",
    items: [
      ["Fonteinbos Nature Reserve", "Discover a local natural area associated with Aberdeen’s landscape.", "/explore-the-karoo", "Confirm access and conditions"],
      ["Karoo birdwatching", "Bring binoculars and look for birds in town gardens and suitable surrounding habitats.", "/explore-the-karoo", "Respect private land"],
      ["Cycling and scenic walking", "Enjoy quiet Karoo scenery where safe and permitted routes are available.", "/explore-the-karoo", "Confirm route suitability"],
      ["Karoo farm-life experience", "Ask participating farm stays about their working-farm experiences.", "/stay", "Booking by arrangement"],
      ["Wool & mohair country", "Explore the region’s farming heritage and the story of Karoo mohair.", "/explore-the-karoo", "Tour availability varies"],
      ["Open skies & stargazing", "Enjoy the region’s expansive views and dark-sky atmosphere from a suitable venue.", "/stay", "Weather dependent"],
      ["Scenic country drives", "Explore surrounding Karoo landscapes and rural roads with local route advice.", "/explore-the-karoo", "Check road conditions"],
      ["Full Moon walk & outdoor events", "Look out for announced community walking, running and cycling occasions.", "/events", "Only when scheduled"]
    ]
  }
];

export default function ThingsToDo() {
  return <main className="container pad">
    <div className="eyebrow">YOUR ABERDEEN EXPERIENCE</div>
    <h1 className="pageTitle">Things to do in Aberdeen</h1>
    <p className="lede">There is more here than meets the eye. Start with the town’s remarkable heritage and hospitality, then discover local makers, gardens and the Karoo countryside.</p>
    <div className="categoryLinks" aria-label="Jump to activity types">
      {groups.map(g => <a href={"#" + g.id} key={g.id}>{g.label} ↓</a>)}
    </div>
    {groups.map(g => <section id={g.id} className="activitySection" key={g.id} aria-labelledby={g.id + "-heading"}>
      <div className="eyebrow">{g.label}</div>
      <h2 id={g.id + "-heading"}>{g.heading}</h2>
      <div className="activityGrid">
        {g.items.map(([name, detail, href, note]) =>
          <a className="activityTile" key={name} href={href}>
            <span className="activityTag">{note}</span>
            <h3>{name}</h3>
            <p>{detail}</p>
            <strong>Find out more →</strong>
          </a>
        )}
      </div>
    </section>)}
    <section className="visitStrip">
      <div><div className="eyebrow">MAKE A DAY OF IT</div><h2>Plan your Aberdeen visit</h2><p>Combine a historic walk with coffee, a meal and a local discovery. Some experiences need prior booking, permission or an event date.</p></div>
      <div className="actions"><a className="btn" href="/plan-your-trip">Plan a visit →</a><a className="btn secondary" href="/map">Visitor map</a></div>
    </section>
    <p className="fine">This is a guide to local experiences, not a guarantee of public access, opening hours or paid tours. Confirm arrangements directly with operators before travelling. Private properties are not open to visitors unless invited.</p>
  </main>;
}
