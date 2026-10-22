const highlights = [
  ["01", "Historic town walks", "Architecture, landmarks and character-filled Karoo streets.", "/architecture"],
  ["02", "Audio Discovery Route", "Eight stories to enjoy from your phone as you explore.", "/discovery-route"],
  ["03", "Churches & heritage", "See distinctive churches and learn about Aberdeen’s past.", "/churches"],
  ["04", "Artists & handmade goods", "Discover local art, ceramics, glasswork and crafts.", "/local-products"],
  ["05", "Karoo food & coffee", "Make time for breakfast, a café stop or a relaxed lunch.", "/eat-drink"],
  ["06", "Open gardens & events", "Find seasonal experiences and community celebrations.", "/events"],
  ["07", "Nature & country escapes", "Find nearby scenery, farm experiences and fresh air.", "/explore-the-karoo"],
  ["08", "Local stories", "Get to know the people and history behind the town.", "/stories"]
];

export default function Home() {
  return <>
    <section className="hero heroCompact">
      <div className="heroInner">
        <div className="eyebrow">WELCOME TO ABERDEEN · EASTERN CAPE</div>
        <h1>Small town.<br/><em>So much to discover.</em></h1>
        <p>Take a walk through history, meet local makers, enjoy Karoo hospitality and explore beyond the N9.</p>
        <div className="actions">
          <a className="btn" href="#activities">Explore activities →</a>
          <a className="btn outline" href="/stay">Find accommodation</a>
        </div>
      </div>
    </section>
    <main className="container homeMain">
      <section id="activities" aria-labelledby="activities-title">
        <div className="eyebrow">EXPLORE MORE OF ABERDEEN</div>
        <h2 id="activities-title" className="sectionTitle">Things to do in and around town</h2>
        <p className="lede">More than a quick stop: choose a heritage walk, experience the local food scene or plan a countryside outing.</p>
        <div className="activityGrid">
          {highlights.map(([num, name, description, link]) =>
            <a className="activityTile" key={num} href={link}>
              <span className="activityNumber">{num}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <strong>Explore →</strong>
            </a>
          )}
        </div>
        <div className="actions"><a className="btn" href="/things-to-do">See all Aberdeen activities →</a><a className="btn secondary" href="/map">Open visitor map</a></div>
      </section>
      <section className="visitStrip">
        <div><div className="eyebrow">YOUR KAROO STOP, MADE MEMORABLE</div><h2>Just passing through?</h2><p>Plan an hour, an afternoon or a weekend in Aberdeen. Many of the best experiences begin with a simple walk around town.</p></div>
        <div className="actions"><a className="btn" href="/plan-your-trip">Plan your visit →</a><a className="btn secondary" href="/events">Upcoming events</a></div>
      </section>
    </main>
  </>;
}
