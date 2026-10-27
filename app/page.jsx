import {photoById} from "./photos";

export const metadata = {
  title: {absolute:"Visit Aberdeen, Eastern Cape | Karoo Travel Guide"},
  description:"Visit Aberdeen, Eastern Cape: discover heritage walks, Karoo food, accommodation, events and local experiences. Plan a relaxed Karoo visit.",
  alternates:{canonical:"/"},
  openGraph:{title:"Visit Aberdeen, Eastern Cape | Karoo Travel Guide",description:"Discover Aberdeen's heritage, local food, stays and events in the Eastern Cape Karoo.",url:"https://visitaberdeen.co.za/",type:"website",locale:"en_ZA",siteName:"Visit Aberdeen"}
};
const destinationSchema = {
  "@context":"https://schema.org","@type":"TouristDestination",
  name:"Aberdeen, Eastern Cape",description:"Historic Karoo town with architecture, food, arts, accommodation and visitor activities.",
  url:"https://visitaberdeen.co.za/",
  address:{"@type":"PostalAddress",addressLocality:"Aberdeen",addressRegion:"Eastern Cape",addressCountry:"ZA"}
};
const choices = [
  {number:"01",title:"Explore",description:"Heritage, local art and Karoo adventures.",href:"/things-to-do",image:"court"},
  {number:"02",title:"Eat & Drink",description:"Good coffee and authentic Karoo flavours.",href:"/eat-drink",image:"street"},
  {number:"03",title:"Stay",description:"Quiet cottages, guesthouses and farm stays.",href:"/stay",image:"house"},
  {number:"04",title:"What's On",description:"Local festivals, markets and activities.",href:"/events",image:"wesleyan"}
];
export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(destinationSchema)}}/>
    <section className="hero homeHero calmHero" style={{backgroundImage:'linear-gradient(90deg,rgba(23,53,40,.89),rgba(23,53,40,.26)),url("'+photoById.street.src+'")'}}>
      <div className="heroInner">
        <div className="eyebrow">THE GREAT KAROO · EASTERN CAPE</div>
        <h1>Discover Aberdeen</h1>
        <p>A small town with a big story. Slow down and find your own Karoo experience.</p>
        <a className="btn heroButton" href="/things-to-do">Explore Aberdeen <span aria-hidden="true">→</span></a>
      </div>
    </section>
    <main className="container calmHomeMain">
      <div className="homeIntro"><div className="eyebrow">START HERE</div><h2>What brings you to Aberdeen?</h2></div>
      <div className="homeChoiceGrid">
        {choices.map(item=><a className="homeChoice" href={item.href} key={item.href}>
          <div className="homeChoiceImage"><img src={photoById[item.image].card} alt={photoById[item.image].alt} loading="lazy"/></div>
          <div className="homeChoiceCopy"><span className="homeChoiceNumber">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><span className="textArrow">Discover <span aria-hidden="true">→</span></span></div>
        </a>)}
      </div>
      <div className="homeShortcuts" aria-label="More ways to explore">
        <span>Explore further</span>
        <a href="/visitor-routes">Four themed routes →</a>
        <a href="/discovery-route">Audio heritage tour →</a>
        <a href="/map">Visitor map →</a>
      </div>
    </main>
  </>;
}
