import { photoById } from "./photos";

const mainMenus = [
  { title: "Things to Do", desc: "Heritage walks, local makers and Karoo adventures.", href: "/things-to-do", photo: "court" },
  { title: "Eat & Drink", desc: "Discover town cafés, coffee stops and local flavours.", href: "/eat-drink", photo: "street" },
  { title: "Stay", desc: "Guesthouses, cottages and welcoming Karoo stays.", href: "/stay", photo: "house" },
  { title: "Events", desc: "Explore markets, garden days and local happenings.", href: "/events", photo: "wesleyan" },
  { title: "Visitor Map", desc: "Find historic landmarks and plan your route.", href: "/map", photo: "church" },
  { title: "Plan a Visit", desc: "Make the most of a quick stop or a longer stay.", href: "/plan-your-trip", photo: "steeple" }
];

export default function Home() {
  return (
    <>
      <section className="hero heroCompact homeHero" style={{
        backgroundImage: 'linear-gradient(110deg, rgba(23,53,40,.96), rgba(23,53,40,.67)), url("' + photoById.street.src + '")'
      }}>
        <div className="heroInner">
          <div className="eyebrow">WELCOME TO ABERDEEN · EASTERN CAPE</div>
          <h1>Discover <em>Aberdeen</em></h1>
          <p>Historic charm, warm hospitality and the wide-open Karoo. Take your time and explore.</p>
        </div>
      </section>
      <main className="container homeMain">
        <section aria-labelledby="explore-aberdeen-title">
          <div className="eyebrow">YOUR ABERDEEN GUIDE</div>
          <h2 id="explore-aberdeen-title" className="sectionTitle">What would you like to explore?</h2>
          <div className="mainMenuGrid">
            {mainMenus.map(item => {
              const photo = photoById[item.photo];
              return (
                <a className="mainMenuCard" href={item.href} key={item.href}>
                  <div className="mainMenuPhoto">
                    <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                  </div>
                  <div className="mainMenuContent">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <span>Explore →</span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
