import Link from "next/link";
const sections=[["/activities","All activities"],["/activities/walking","Walking & hiking"],["/activities/cycling","Cycling"],["/activities/moonwalk","Full Moon Walk"]];
export default function ActivitiesLayout({children}:{children:React.ReactNode}){return <><nav className="activity-navigation" aria-label="Activity sections"><div className="container">{sections.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</div></nav>{children}</>}
