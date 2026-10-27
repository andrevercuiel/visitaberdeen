import {routes} from "../../data/visitorRoutes";
export const metadata = {
  title:"Things to Do in Aberdeen, Eastern Cape",
  description:"Explore Aberdeen's heritage, food, arts and outdoor Karoo experiences through four simple visitor routes.",
  alternates:{canonical:"/things-to-do"},
  openGraph:{title:"Things to Do in Aberdeen, Eastern Cape",description:"Four easy ways to discover Aberdeen: heritage, food, arts and the Karoo outdoors.",url:"https://visitaberdeen.co.za/things-to-do",type:"website",locale:"en_ZA",siteName:"Visit Aberdeen"}
};
const extras=[
 ["Listen to the audio heritage tour","/discovery-route"],
 ["Explore historic buildings","/architecture"],
 ["Discover churches","/churches"],
 ["Meet local makers","/local-products"],
 ["Enjoy the Karoo outdoors","/explore-the-karoo"]
];
export default function ThingsToDo() {
  return <main className="container pad quietContent">
    <div className="eyebrow">DISCOVER ABERDEEN</div>
    <h1 className="pageTitle">Things to do</h1>
    <p className="lede">You don't have to do everything. Choose what interests you and enjoy Aberdeen at your own pace.</p>
    <div className="routeSelection">
      {routes.map((route,i)=><a className="routeChoice" href={"/visitor-routes#"+route.id} key={route.id}>
        <span className="routeChoiceNumber">0{i+1}</span>
        <div><span className="eyebrow">{route.label}</span><h2>{route.title}</h2><p>{route.description}</p></div>
        <span className="routeChoiceArrow" aria-hidden="true">→</span>
      </a>)}
    </div>
    <section className="moreExplore" aria-labelledby="specific-heading">
      <h2 id="specific-heading">Looking for something specific?</h2>
      <div className="textLinkCollection">
        {extras.map(([label,href])=><a href={href} key={href}>{label} <span aria-hidden="true">→</span></a>)}
      </div>
    </section>
    <p className="fine">Opening times, availability and guided experiences must be confirmed with the relevant venue or organiser.</p>
  </main>;
}
