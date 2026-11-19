import Link from "next/link";
import {activities} from "@/lib/activities";
export default function ActivitiesLayout({children}:{children:React.ReactNode}){return <><nav className="activity-navigation" aria-label="Activity sections"><div className="container"><Link href="/activities">All activities</Link>{activities.map(item=><Link key={item.slug} href={"/activities/"+item.slug}>{item.title}</Link>)}</div></nav>{children}</>}
