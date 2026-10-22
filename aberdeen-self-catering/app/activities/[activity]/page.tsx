import Link from "next/link";
import {notFound} from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import {activities} from "@/lib/activities";
import {pageMetadata} from "@/lib/seo";
const additional=activities.filter(item=>!["walking","cycling","moonwalk"].includes(item.slug));
export const dynamicParams=false;
export function generateStaticParams(){return additional.map(item=>({activity:item.slug}));}
export async function generateMetadata({params}:{params:Promise<{activity:string}>}){
 const {activity}=await params;const item=additional.find(item=>item.slug===activity);if(!item)return {};
 return pageMetadata({title:item.title+" in Aberdeen | Aberdeen Self Catering",description:item.intro,path:"/activities/"+item.slug});
}
export default async function ActivityPage({params}:{params:Promise<{activity:string}>}){
 const {activity}=await params;const item=additional.find(item=>item.slug===activity);if(!item)notFound();
 const whatsapp="https://wa.me/27823895770?text="+encodeURIComponent("Hello Jurgens, please send me details about "+item.title+" in Aberdeen.");
 return <main><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Activities",href:"/activities"},{label:item.title,href:"/activities/"+item.slug}]}/>
 <section className="sub-hero"><div className="container"><p className="kicker">Aberdeen · Eastern Cape · Karoo</p><h1>{item.title}</h1><p>{item.intro}</p><div className="actions"><a className="btn btn-sand" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire with Jurgens ↗</a><Link className="btn btn-outline" href="/activities">Back to Activities</Link></div></div></section>
 <section className="section"><div className="container"><h2>Plan your experience</h2><p>Contact Jurgens Strydom to discuss your preferred dates, group size and interests. Please confirm availability, location, access arrangements, suitability and any costs before making plans.</p><div className="actions"><a className="btn" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp Jurgens</a><a className="text-link" href="tel:+27823895770">082 389 5770</a></div></div></section>
 <section className="promo"><div className="container promogrid"><div><h2>Make it a Karoo getaway</h2><p>Explore accommodation for your visit to Aberdeen.</p></div><Link className="btn btn-sand" href="/accommodation">View accommodation</Link></div></section>
 </main>;
}
