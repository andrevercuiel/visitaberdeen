import {routes} from "../../data/visitorRoutes";

export const metadata = {
  title:"Aberdeen Tourism Routes | Heritage, Food, Arts & Karoo Experiences",
  description:"Explore four Aberdeen tourism routes: Faith, Stone & Stories; Karoo Flavours; Arts & Culture; and Light, Land & Silence.",
  alternates:{canonical:"/visitor-routes"},
  openGraph:{title:"Aberdeen Visitor Routes",description:"Four relaxed routes through Aberdeen's heritage, food, arts and Karoo outdoors.",url:"https://visitaberdeen.co.za/visitor-routes",type:"website",locale:"en_ZA",siteName:"Visit Aberdeen"}
};
export default function VisitorRoutes(){
 return <main className="container pad quietContent">
   <div className="eyebrow">YOUR ABERDEEN GUIDE</div>
   <h1 className="pageTitle">Explore by route</h1>
   <p className="lede">Four different ways to experience Aberdeen. Open a route to discover its places, stories and visitor notes.</p>
   <nav className="routeJump" aria-label="Jump to a route">
     {routes.map((r,i)=><a href={"#"+r.id} key={r.id}>0{i+1} · {r.title}</a>)}
   </nav>
   <div className="routePanels">
     {routes.map((route,i)=><section id={route.id} key={route.id} className="routePanel" aria-labelledby={route.id+"-title"}>
       <div className="routePanelHead">
         <span className="routePanelNumber">0{i+1}</span>
         <div><div className="eyebrow">{route.label}</div><h2 id={route.id+"-title"}>{route.title}</h2><p>{route.description}</p></div>
       </div>
       <details className="routeStops">
         <summary>Explore {route.stops.length} places and experiences <span aria-hidden="true">＋</span></summary>
         <ol>
           {route.stops.map(([name,detail,note])=><li key={name}><h3>{name}</h3><p>{detail}</p><p className="fine">{note}</p></li>)}
         </ol>
       </details>
       <div className="routePanelLinks">{route.links.map(([label,href])=><a href={href} key={href}>{label} →</a>)}</div>
     </section>)}
   </div>
   <p className="fine">These are suggested themes, not booked guided tours. Some historic stories are local traditions; access, dates and operator details should be confirmed before visiting.</p>
 </main>;
}
