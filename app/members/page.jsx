import MemberCard from "../member-card";
import { getTownHubAtaMembers } from "../get-townhub-members";
export const metadata={title:"ATA Members & Local Business Directory",alternates:{canonical:"/members"}};
export default async function Members(){
 const members=await getTownHubAtaMembers();
 return <main className="container pad quietContent">
   <div className="eyebrow">ABERDEEN TOURISM ASSOCIATION</div>
   <h1 className="pageTitle">Meet our ATA members</h1>
   <p className="lede">Support local tourism association members. Membership is maintained in TownHub and confirmed links are provided where available.</p>
   <p className="fine">{members.length} ATA members</p>
   <div className="businessCardGrid">{members.map(m=><MemberCard key={m.name} member={m}/>)}</div>
   <p><a href="/join-ata">Join the Aberdeen Tourism Association →</a></p>
 </main>;
}
