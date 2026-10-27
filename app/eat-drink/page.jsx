export const metadata = {
 title:"Where to Eat in Aberdeen, Eastern Cape",
 description:"Discover Aberdeen's cafés, coffee shops, restaurants, local food and Kamdebo Padstal farm-stall stop.",
 alternates:{canonical:"/eat-drink"},
 openGraph:{title:"Eat & Drink in Aberdeen",description:"Discover local coffee, meals and Karoo flavours in Aberdeen, Eastern Cape.",url:"https://visitaberdeen.co.za/eat-drink",type:"website",locale:"en_ZA",siteName:"Visit Aberdeen"}
};
const venues=[
 ["Check Mate Coffee Café","Coffee, breakfast and chess","Fresh coffee, espresso drinks, breakfast and light meals in a relaxed setting.","Aberdeen · address to be confirmed"],
 ["Windmill Coffee & Deli","Coffee, breakfast and light meals","Deli-style food and coffee in a historic Aberdeen setting.","8 Voortrekker Street · verify address"],
 ["The Blue Door Aberdeen","Coffee and lunch","A welcoming local coffee, breakfast and lunch stop.","18 Voortrekker Street · verify address"],
 ["Die Stal Sports & Cocktail Bar","Drinks and socialising","An informal social spot for drinks, conversation and watching sport.","Aberdeen · address to be confirmed"],
 ["Kahroo Diner","Pizza, fish and chicken","Casual sit-down meals and possible food-truck catering for functions.","Aberdeen · trading details to be confirmed"],
 ["Kah-rooh Kitchen","Local takeaway meals","Previously listed meal option; please confirm whether it trades under this name.","Aberdeen · trading details to be confirmed"],
 ["Kamdebo Padstal","Karoo farm-stall favourites","Karoo-style food, pancakes, baked goods, preserves and farm products.","N9 / R61 junction"]
];
export default function Eat() {
 return <main className="container pad quietContent">
   <div className="eyebrow">LOCAL FLAVOURS</div><h1 className="pageTitle">Eat & Drink</h1>
   <p className="lede">Good coffee, a relaxed breakfast or a taste of the Karoo. Choose a stop and check arrangements before you visit.</p>
   <div className="simpleDirectory">
     {venues.map(([name,tag,detail,address])=><details className="directoryItem" key={name}>
       <summary><span><strong>{name}</strong><small>{tag}</small></span><span className="directoryExpand" aria-hidden="true">＋</span></summary>
       <div className="directoryBody"><p>{detail}</p><p className="fine">{address}</p></div>
     </details>)}
   </div>
   <div className="quietBottomLink"><a href="/visitor-routes#authentic-karoo-flavours">Explore the Karoo Flavours route →</a></div>
   <p className="fine">Venue details and current opening hours may change. Some names and addresses still need confirmation; this is not a verified membership or booking directory.</p>
 </main>;
}
