import Link from "next/link";
import Image from "next/image";
import type {Stay} from "@/lib/content";
export default function RoomCard({stay}:{stay:Stay}) {return <article className="room-card"><Link className="room-image" href={"/"+stay.slug}><Image src={stay.images[0]} alt={stay.name+" accommodation in Aberdeen"} loading="lazy" width={1200} height={800} sizes="(max-width: 700px) 100vw, 33vw" /><span className="room-label">{stay.label}</span></Link><div className="room-copy"><h3><Link href={"/"+stay.slug}>{stay.name}</Link></h3><p>{stay.intro}</p><div className="room-meta">{stay.sleeps?<span>Sleeps {stay.sleeps}</span>:<span>Groups welcome</span>}{stay.bedrooms&&<span>{stay.bedrooms} {stay.bedrooms===1?"bedroom":"bedrooms"}</span>}</div><Link className="text-link" href={"/"+stay.slug}>Explore accommodation →</Link></div></article>}

