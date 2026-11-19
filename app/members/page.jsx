import MemberCard from "../member-card";
import members from "../../data/ata-members.json";
export const metadata={title:"ATA Members & Local Business Directory",alternates:{canonical:"/members"}};
export default function Members(){return <main className="container pad quietContent"><div className="eyebrow">ABERDEEN TOURISM ASSOCIATION · 2026</div><h1 className="pageTitle">Meet our ATA members</h1><p className="lede">Support local tourism association members. Verified online links are provided where available.</p><div className="businessCardGrid">{members.map(m=><MemberCard key={m.name} member={m}/>)}</div><p><a href="/join-ata">Join the Aberdeen Tourism Association →</a></p></main>;}
