const stays = [
  { name: "Klein Karoo Cottage", detail: "2 bedrooms · 1 bathroom · sleeps 4", tag: "Family favourite" },
  { name: "Tanqua Cottage", detail: "1 bedroom · 1 bathroom · sleeps 2", tag: "Quiet escape" },
  { name: "Namib Cottage", detail: "2 beds · 1 bathroom · sleeps 2", tag: "Easy overnight" },
  { name: "Camdeboo Cottage", detail: "3 bedrooms · 2 bathrooms · sleeps 5", tag: "More space" },
  { name: "Karoo Glamping", detail: "1 bed · private facilities · sleeps 2", tag: "Under Karoo skies" },
  { name: "GS Retreat", detail: "Biker-focused glamping and camping", tag: "Adventure base" },
  { name: "Biker's Paradise", detail: "3 beds · 1 bathroom · sleeps 6", tag: "Ride, rest, repeat" },
];

const amenities = [
  "Free Wi-Fi",
  "On-site parking",
  "Air-conditioning",
  "Private braai areas",
  "Swimming pool",
  "Pet-friendly",
  "Cleaning service",
  "Check Mate Coffee Shop",
];

const reviews = [
  {
    quote:
      "The glamping area was large, private and everything was well thought out. We had a memorable, 5-star experience.",
    author: "Guest review",
  },
  {
    quote:
      "A small hidden gem. Every place has its own private area where you can braai, relax and enjoy the Karoo atmosphere.",
    author: "Guest review",
  },
  {
    quote:
      "Neat, clean Karoo accommodation, fully equipped and very welcoming. We will definitely visit again.",
    author: "Guest review",
  },
];

const nightsBridge = "https://www.nightsbridge.co.za/bridge/book?bbid=19959";
const phone = "27827990788";
const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(
  "Hello Aberdeen Self Catering, I would like to enquire about activities and experiences."
)}`;
const activityWhatsApp = (activity: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(`Hello Aberdeen Self Catering, I would like to enquire about ${activity}. Please send me details and availability.`)}`;

const activities = [
  { name: "Karoo hiking & walking", description: "Explore trails, historic streets and scenic walks in and around Aberdeen. Ask about local routes and arrangements." },
  { name: "Cycling & motorcycle routes", description: "Discover Karoo gravel roads, scenic loops and routes for two-wheeled adventures." },
  { name: "Birdwatching & photography", description: "Enjoy the region's landscapes, birdlife and rewarding photographic outings." },
  { name: "Stargazing & sundowner rides", description: "Experience Karoo skies and enquire about suitable evening outings, weather permitting." },
  { name: "4×4 & farm experiences", description: "Ask about nearby off-road routes, farm outings and bush-camping possibilities." },
  { name: "Heritage & day trips", description: "Explore Aberdeen's architecture, Graaff-Reinet, Camdeboo National Park and Nieu-Bethesda." },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Aberdeen Self Catering home">
          <span className="brandMark">ASC</span>
          <span>
            <strong>Aberdeen Self Catering</strong>
            <small>Eastern Cape · Karoo</small>
          </span>
        </a>
        <nav className="desktopNav" aria-label="Main navigation">
          <a href="#stay">Stay</a>
          <a href="#bikers">Bikers</a>
          <a href="#activities">Activities</a>
          <a href="#coffee">Check Mate</a>
          <a href="#explore">Explore</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="headerCta" href={nightsBridge} target="_blank" rel="noreferrer">
          Check availability
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">Aberdeen · Eastern Cape · Heart of the Karoo</p>
          <h1>Stay somewhere that feels like the Karoo.</h1>
          <p className="heroLead">
            Comfortable self-catering cottages, glamping and biker-friendly stays in a relaxed
            garden setting in historic Aberdeen.
          </p>
          <div className="heroActions">
            <a className="btn primary" href={nightsBridge} target="_blank" rel="noreferrer">
              Book accommodation
            </a>
            <a className="btn ghost" href="#stay">
              View accommodation
            </a>
          </div>
          <div className="trustStrip" aria-label="Key amenities">
            <span>Pet-friendly</span>
            <span>Free Wi-Fi</span>
            <span>Pool</span>
            <span>Secure parking</span>
            <span>Private braais</span>
          </div>
        </div>
      </section>

      <section className="intro section">
        <div>
          <p className="eyebrow dark">Welcome to Aberdeen</p>
          <h2>A comfortable base for the road, the town and the wider Karoo.</h2>
        </div>
        <p>
          Set in a historic Karoo town, Aberdeen Self Catering offers an informal, welcoming
          place to rest. Stay for a night on your journey or settle in for longer and explore
          Aberdeen, Graaff-Reinet, Camdeboo National Park, Nieu-Bethesda and the surrounding
          Eastern Cape Karoo.
        </p>
      </section>

      <section className="stay section" id="stay">
        <div className="sectionHead">
          <div>
            <p className="eyebrow dark">Stay</p>
            <h2>Choose your Karoo stay</h2>
          </div>
          <a href={nightsBridge} target="_blank" rel="noreferrer" className="textLink">
            Ask us what is available →
          </a>
        </div>

        <div className="featuredStay">
          <div className="stayPhoto">
            <img
              src="https://aberdeenselfcatering.odoo.com/web/image/435-8abd98a5/klein-karoo-2.png"
              alt="Klein Karoo Cottage bedroom at Aberdeen Self Catering"
            />
          </div>
          <div className="stayFeatureText">
            <span className="pill">Popular choice</span>
            <h3>Klein Karoo Cottage</h3>
            <p>
              A comfortable two-bedroom cottage for up to four guests — ideal for couples,
              families or friends travelling together.
            </p>
            <ul className="miniList">
              <li>2 bedrooms</li>
              <li>1 bathroom</li>
              <li>Sleeps 4</li>
              <li>Private braai</li>
            </ul>
            <a className="btn darkBtn" href={nightsBridge} target="_blank" rel="noreferrer">
              Book this cottage
            </a>
          </div>
        </div>

        <div className="stayGrid">
          {stays.slice(1).map((stay, index) => (
            <article className="stayCard" key={stay.name}>
              <div className={`cardVisual visual${index + 1}`}>
                <span>{stay.tag}</span>
              </div>
              <div className="cardBody">
                <h3>{stay.name}</h3>
                <p>{stay.detail}</p>
                <a href={nightsBridge} target="_blank" rel="noreferrer">
                  Check availability →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="amenitiesBand">
        <div className="section amenitiesInner">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2>Simple comforts. Genuine Karoo hospitality.</h2>
          </div>
          <div className="amenitiesGrid">
            {amenities.map((item) => (
              <div className="amenity" key={item}>
                <span className="tick">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="split section" id="bikers">
        <div className="splitImage bikerImage" role="img" aria-label="Karoo biker-friendly accommodation" />
        <div className="splitText">
          <p className="eyebrow dark">GS Retreat · Bikers</p>
          <h2>Made for riders crossing the Karoo.</h2>
          <p>
            Aberdeen is a natural stop for riders exploring the region. GS Retreat adds the
            practical extras bikers actually use: covered bike parking, bike wash facilities,
            helmet cleaning, tyre inflation, braai areas, laundry and space to unwind.
          </p>
          <div className="featureChips">
            <span>15% biker discount</span>
            <span>Covered parking</span>
            <span>Bike wash</span>
            <span>Free firewood</span>
          </div>
          <a className="btn darkBtn" href={nightsBridge} target="_blank" rel="noreferrer">
            Book accommodation
          </a>
        </div>
      </section>

      <section className="activities section" id="activities">
        <div className="sectionHead">
          <div>
            <p className="eyebrow dark">Activities &amp; experiences</p>
            <h2>More to discover in the Karoo</h2>
            <p>From nature and heritage to outdoor adventures, ask us about local options and arrangements. Activities are handled by WhatsApp, not NightsBridge.</p>
          </div>
        </div>
        <div className="exploreGrid">
          {activities.map((activity) => (
            <article key={activity.name}>
              <strong>{activity.name}</strong>
              <span>{activity.description}</span>
              <a href={activityWhatsApp(activity.name)} target="_blank" rel="noreferrer" className="textLink">
                Enquire on WhatsApp →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="coffee section" id="coffee">
        <div className="coffeeCard">
          <p className="eyebrow">Eat · Meet · Relax</p>
          <h2>Check Mate Coffee Shop</h2>
          <p>
            Start the morning with coffee, enjoy a hearty breakfast or slow down with friends.
            Check Mate is on the property, making it easy for guests and visitors to eat, meet
            and relax without having to go far.
          </p>
          <div className="coffeeActions">
            <a className="btn lightBtn" href={whatsapp} target="_blank" rel="noreferrer">
              Enquire on WhatsApp
            </a>
            <span>Good coffee · Karoo hospitality</span>
          </div>
        </div>
      </section>

      <section className="reviews section">
        <div className="sectionHead">
          <div>
            <p className="eyebrow dark">Guest notes</p>
            <h2>Why guests remember the stay</h2>
          </div>
        </div>
        <div className="reviewGrid">
          {reviews.map((review) => (
            <blockquote key={review.quote}>
              <div className="stars">★★★★★</div>
              <p>“{review.quote}”</p>
              <footer>{review.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="explore section" id="explore">
        <div className="exploreText">
          <p className="eyebrow dark">Explore</p>
          <h2>Stay in Aberdeen. Explore the wider Karoo.</h2>
          <p>
            Historic architecture, open landscapes, star-filled skies and memorable road trips
            make Aberdeen a useful base for discovering the region.
          </p>
        </div>
        <div className="exploreGrid">
          <article><strong>Aberdeen</strong><span>History, architecture and local character</span></article>
          <article><strong>Graaff-Reinet</strong><span>Easy day trip and heritage town</span></article>
          <article><strong>Camdeboo</strong><span>National park and Valley of Desolation</span></article>
          <article><strong>Nieu-Bethesda</strong><span>Art, history and Karoo scenery</span></article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contactCard">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>Make Aberdeen your next Karoo stop.</h2>
            <p>Reserve your accommodation online through NightsBridge, or WhatsApp us about activities, local experiences and other enquiries.</p>
          </div>
          <div className="contactActions">
            <a className="btn lightBtn" href={nightsBridge} target="_blank" rel="noreferrer">Book accommodation · NightsBridge</a>
            <a href={whatsapp} target="_blank" rel="noreferrer">Activities &amp; experiences · WhatsApp +27 82 799 0788</a>
            <a href="mailto:info@aberdeenselfcatering.co.za">info@aberdeenselfcatering.co.za</a>
            <span>14 Andries Pretorius Street, Aberdeen, Eastern Cape 6270</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Aberdeen Self Catering</strong>
          <p>Comfortable Karoo stays in historic Aberdeen, Eastern Cape.</p>
        </div>
        <div className="footerLinks">
          <a href="#stay">Stay</a>
          <a href="#bikers">Bikers</a>
          <a href="#coffee">Check Mate</a>
          <a href="#explore">Explore</a>
          <a href="#contact">Contact</a>
        </div>
        <small>© 2026 Aberdeen Self Catering</small>
      </footer>

      <a className="floatingWhatsApp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Aberdeen Self Catering">
        WhatsApp
      </a>
    </main>
  );
}
