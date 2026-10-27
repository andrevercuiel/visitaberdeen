import events from '../../data/events.json';

export const metadata = {
  title: "Events in Aberdeen, Eastern Cape",
  description: "Find confirmed festivals, markets, garden days, sporting activities and community events in Aberdeen, Eastern Cape. Check dates before visiting.",
  alternates: { canonical: "/events" },
  openGraph: { title: "Events in Aberdeen, Eastern Cape", description: "Find confirmed festivals, markets, garden days, sporting activities and community events in Aberdeen, Eastern Cape. Check dates before visiting.", url: "https://visitaberdeen.co.za/events", type: "website", locale: "en_ZA", siteName: "Visit Aberdeen" }
};

export default function Events() {
  const upcoming = events
    .filter(
      (event) =>
        event.approved === true &&
        event.published === true &&
        event.endDate >= new Date().toISOString().slice(0, 10),
    )
    .sort((a, b) => a.startDate.localeCompare(b.startDate));

  return (
    <main className="container pad">
      <div className="eyebrow">WHAT'S ON IN THE KAROO</div>
      <h1 className="pageTitle">Events in Aberdeen</h1>
      <p className="lede">
        Plan your visit around Aberdeen's festivals, markets, local gatherings
        and special experiences. Only confirmed, approved visitor events are
        listed in the calendar.
      </p>


      <section aria-labelledby="vlam-vesel-title" style={{ marginTop: 46 }}>
        <div className="eyebrow">LOCAL CULTURAL FESTIVAL</div>
        <h2 id="vlam-vesel-title" className="pageTitle">Vlam &amp; Vesel — Fire &amp; Fibre of the Karoo</h2>
        <p className="lede">Celebrate the defining elements of Aberdeen's farming community: flame, braai, hospitality, wool, sheep and the people whose skills sustain the Karoo.</p>
        <div className="featureGrid">
          <article className="feature"><span>VLAM / FLAME</span><h3>Food &amp; fellowship</h3><p>Local braai, food and warm Karoo hospitality bring people together.</p></article>
          <article className="feature"><span>VESEL / FIBRE</span><h3>Wool &amp; farming heritage</h3><p>Discover the sheep-farming and fibre traditions that helped shape Aberdeen's identity.</p></article>
          <article className="feature"><span>COMMUNITY</span><h3>Local culture</h3><p>A place for makers, agricultural displays and celebrations of rural life when the programme is announced.</p></article>
        </div>
        <p className="fine">A previous community outline describes this as a recurring festival, often around September. No 2026 or future date is confirmed here; only approved dated events appear below.</p>
        <p><a href="/visitor-routes#arts-crafts-culture"><b>Explore Aberdeen's Arts &amp; Culture route →</b></a></p>
      </section>
      <section aria-labelledby="garden-day-title" style={{ marginTop: 46 }}>
        <div className="eyebrow">A FUTURE ATA EVENT IDEA</div>
        <h2 id="garden-day-title" className="pageTitle">
          Open Gardens &amp; Karoo Flavours
        </h2>
        <p className="lede">
          Take a self-guided stroll through participating Aberdeen gardens,
          meet the people who care for them, and enjoy local food and drink at
          stops along the way. The Nieuw-Bethesda Garden Day is a lovely
          example of how gardens, hosts and local hospitality can come together
          to create a full-day village experience.
        </p>

        <div className="featureGrid">
          <article className="feature">
            <span>01 / FIND YOUR WAY</span>
            <h3>A garden trail map</h3>
            <p>
              Collect a printed map or follow a mobile route between the
              participating gardens and venues. An event-specific map can be
              added when the route is confirmed.
            </p>
            <a href="/map"><b>Explore the Aberdeen map →</b></a>
          </article>

          <article className="feature">
            <span>02 / MEET THE HOSTS</span>
            <h3>People make the day</h3>
            <p>
              Meet the gardeners and hosts at each stop, hear the stories
              behind their spaces, and give visitors a warm welcome to the
              village.
            </p>
          </article>

          <article className="feature">
            <span>03 / TASTE THE KAROO</span>
            <h3>Local treats along the route</h3>
            <p>
              Each participating business could offer its own special touch:
              breakfast, tea and cake, a light lunch, local products, or a
              tasting. Menus and serving times would be shown on the event map.
            </p>
          </article>

          <article className="feature">
            <span>04 / STAY A LITTLE LONGER</span>
            <h3>Turn a day out into a getaway</h3>
            <p>
              Visitors can combine the trail with Aberdeen's accommodation,
              restaurants and other experiences.
            </p>
            <div className="actions">
              <a className="btn small" href="/stay">Find a place to stay</a>
              <a className="btn small" href="/eat-drink">Find food &amp; drink</a>
            </div>
          </article>
        </div>

        <div className="progress" role="note">
          This is an event idea, not a scheduled event. ATA can publish a date,
          participating gardens, venue offerings, booking details and the
          finished route map once these are confirmed.
        </div>
      </section>

      <section id="events-list" aria-labelledby="upcoming-events-title" style={{ marginTop: 60 }}>
        <div className="eyebrow">CONFIRMED EVENTS</div>
        <h2 id="upcoming-events-title" className="pageTitle">Upcoming Events</h2>
        {upcoming.length ? (
          <div className="featureGrid">
            {upcoming.map((event) => (
              <article className="feature" key={event.id}>
                <span>{event.category} · {event.startDate}</span>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p>{event.venue}</p>
                {event.url && (
                  <a href={event.url} target="_blank" rel="noreferrer">
                    <b>Event details ↗</b>
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="feature" style={{ marginTop: 28, minHeight: 0 }}>
            <h3>Upcoming events are being confirmed</h3>
            <p>
              Please check back for confirmed dates, venues and booking details.
            </p>
          </div>
        )}
      </section>

      <p className="fine" style={{ marginTop: 30 }}>
        Dates and arrangements may change. Confirm details with the event
        organiser before travelling. Municipal complaints, reporting statistics
        and other TownHub civic records are not displayed here.
      </p>
    </main>
  );
}
