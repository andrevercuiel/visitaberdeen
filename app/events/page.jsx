import events from "../../data/events.json";
export const metadata = {
  title: "Events in Aberdeen, Eastern Cape",
  description: "Find confirmed festivals, markets, garden days, sporting activities and community events in Aberdeen, Eastern Cape. Check dates before visiting.",
  alternates: { canonical: "/events" },
  openGraph: { title: "Events in Aberdeen, Eastern Cape", description: "Find confirmed festivals, markets, garden days, sporting activities and community events in Aberdeen, Eastern Cape. Check dates before visiting.", url: "https://visitaberdeen.co.za/events", type: "website", locale: "en_ZA", siteName: "Visit Aberdeen" }
};
export default function Events(){
 const upcoming=events.filter(event=>event.approved===true&&event.published===true&&event.endDate>=new Date().toISOString().slice(0,10)).sort((a,b)=>a.startDate.localeCompare(b.startDate));
 return <main className="container pad quietContent">
   <div className="eyebrow">WHAT'S ON</div><h1 className="pageTitle">Events in Aberdeen</h1>
   <p className="lede">Plan around confirmed community events, local culture and outdoor activities.</p>
   <section aria-labelledby="event-dates">
    <h2 id="event-dates" className="sectionTitle">Upcoming events</h2>
    {upcoming.length?<div className="simpleDirectory">{upcoming.map(e=><article className="directoryItem eventListing" key={e.id}>
      <span className="eyebrow">{e.startDate} · {e.category}</span><h3>{e.name}</h3><p>{e.description}</p><p className="fine">{e.venue}</p>{e.url&&<a href={e.url} target="_blank" rel="noreferrer">Event information →</a>}
    </article>)}</div>:<div className="emptyState"><p>No confirmed dates are listed at present.</p><p className="fine">New events will appear here once organisers confirm their details.</p></div>}
   </section>
   <section className="eventIdeas" aria-labelledby="seasonal-events">
    <div className="eyebrow">LOCAL TRADITIONS & IDEAS</div>
    <h2 id="seasonal-events" className="sectionTitle">Worth looking out for</h2>
    <details className="directoryItem">
      <summary><span><strong>Vlam & Vesel — Fire & Fibre</strong><small>Food, braai, wool and farming heritage</small></span><span className="directoryExpand" aria-hidden="true">＋</span></summary>
      <div className="directoryBody"><p>Karoo hospitality, sheep farming, wool heritage and community stories are at the heart of this festival concept.</p><p className="fine">Dates and programme not confirmed.</p></div>
    </details>
    <details className="directoryItem">
      <summary><span><strong>Open Gardens & Karoo Flavours</strong><small>A proposed garden and village food day</small></span><span className="directoryExpand" aria-hidden="true">＋</span></summary>
      <div className="directoryBody"><p>A future ATA idea: explore participating gardens, meet local hosts and enjoy meals or tastings along a self-guided route.</p><p className="fine">This is a proposal, not a scheduled event.</p></div>
    </details>
   </section>
   <p className="fine">Only approved, dated events are shown as upcoming. Confirm bookings and venue arrangements with organisers.</p>
 </main>;
}
