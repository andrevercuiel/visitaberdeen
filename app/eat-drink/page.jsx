import members from "../../data/ata-members.json";
export const metadata = {
 title:"Where to Eat in Aberdeen, Eastern Cape",
 description:"Discover Aberdeen's cafés, coffee shops, restaurants, local food and Kamdebo Padstal farm-stall stop.",
 alternates:{canonical:"/eat-drink"},
 openGraph:{title:"Eat & Drink in Aberdeen",description:"Discover local coffee, meals and Karoo flavours in Aberdeen, Eastern Cape.",url:"https://visitaberdeen.co.za/eat-drink",type:"website",locale:"en_ZA",siteName:"Visit Aberdeen"}
};
const venues=[
 ["Checkmate Coffee Café","Coffee, hearty breakfasts and chess","Enjoy coffee, hearty breakfasts and Karoo hospitality at the on-site café at Aberdeen Self Catering. Bikers, families and friends are welcome.","14 Andries Pretorius Street, Aberdeen 6270","Geniet koffie, stewige ontbyte en Karoo-gasvryheid by Aberdeen Self Catering se koffiewinkel. Motorfietsryers, gesinne en vriende is welkom."],
 ["Windmill Coffee Shop","Coffee, breakfast and light meals","Deli-style food and coffee in a historic Aberdeen setting.","8 Voortrekker Street · verify address"],
 ["Die Stal Sports & Cocktail Bar","Drinks and socialising","An informal social spot for drinks, conversation and watching sport.","Aberdeen · address to be confirmed"],
 ["Karooh Kitchen","Pizza, Fish & Chips","Local takeaway pizza, fish and chips.","Aberdeen · trading details to be confirmed"],
 ["Kamdebo Padstal","Coffee, pancakes, home-cooked meals and farm shop","Just outside the historic town of Aberdeen, where the N9 and R61 meet, Kamdebo Padstal awaits – a cheerful yellow landmark of genuine Karoo hospitality.\n\nEnjoy aromatic coffee, famous pancakes, delicious home-cooked meals and local treats. Browse the farm shop for unique gifts, handmade products and Karoo treasures.\n\nKamdebo Padstal is proudly owned and run by Hanna and Dirk van der Westhuizen, the mother-and-son winners of kykNET’s Kokkedoor: Son & See.\n\nThis is a welcoming stop where good food, warm hospitality and the distinctive character of the Great Karoo come together.","N9 / R61 junction","Net buite die geskiedkundige dorpie Aberdeen, waar die N9 en R61 ontmoet, wag Kamdebo Padstal – ’n vrolike geel baken van egte Karoo-gasvryheid.\n\nKom geniet geurige koffie, beroemde pannekoek, heerlike tuisgemaakte geregte en allerlei plaaslike lekkernye. Snuffel rustig deur die negosiewinkel, waar unieke geskenke, handgemaakte produkte en Karoo-skatte op jou wag.\n\nKamdebo Padstal word met trots besit en bedryf deur Hanna en Dirk van der Westhuizen, die ma-en-seun-wenners van kykNET se Kokkedoor: Son & See.\n\nHier is ’n stilhouplek waar goeie kos, warm gasvryheid en die besondere karakter van die Groot-Karoo bymekaarkom."]
];
export default function Eat() {
 return <main className="container pad quietContent">
   <div className="eyebrow">LOCAL FLAVOURS</div><h1 className="pageTitle">Eat & Drink</h1>
   <p className="lede">Good coffee, a relaxed breakfast or a taste of the Karoo. Choose a stop and check arrangements before you visit.</p>
   <div className="simpleDirectory">
     {venues.map(([name,tag,detail,address,detailAf])=>{const member=name==="Checkmate Coffee Café"?(()=>{const parent=members.find(m=>m.name==="Aberdeen Self Catering");return parent?{...parent,links:[["Checkmate Café website","https://www.aberdeenselfcatering.co.za/checkmate-coffee-cafe/"],["WhatsApp: 082 799 0788","https://wa.me/27827990788"],["Email","mailto:info@aberdeenselfcatering.co.za"],["Call: 082 799 0788","tel:+27827990788"]]}:null;})():members.find(m=>m.name===name&&m.categories.includes("Eat & Drink"));return member?<details className="directoryItem" key={name}>
       <summary><span><strong>{name}</strong><small>{name==="Checkmate Coffee Café"?"Part of Aberdeen Self Catering · ATA member 2026":"ATA member 2026"} · {tag}</small></span><span className="directoryExpand" aria-hidden="true">＋</span></summary>
       <div className="directoryBody"><div lang="en">{detail.split("\n\n").map((paragraph,i)=><p key={i}>{paragraph}</p>)}</div>{detailAf&&<details lang="af"><summary>Lees in Afrikaans</summary>{detailAf.split("\n\n").map((paragraph,i)=><p key={i}>{paragraph}</p>)}</details>}<p className="fine">{address}</p>{member.links.map(([label,url])=><p key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label} ↗</a></p>)}</div>
     </details>:<article className="feature" key={name}><h3>{name}</h3></article>;})}
   </div>
   <div className="quietBottomLink"><a href="/visitor-routes#authentic-karoo-flavours">Explore the Karoo Flavours route →</a></div>
   <p className="fine">Venue details and current opening hours may change. Some names and addresses still need confirmation; membership follows the 2026 ATA register.</p>
 </main>;
}
