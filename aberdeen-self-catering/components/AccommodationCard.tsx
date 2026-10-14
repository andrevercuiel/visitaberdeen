import Link from "next/link";
import type {Stay} from "@/lib/content";

export default function AccommodationCard({stay}:{stay:Stay}) {
  return <article className="accom-list-card">
    <Link className="accom-list-card-image" href={"/"+stay.slug} aria-label={"View "+stay.name}>
      <img src={stay.images[0]} alt={stay.name+" at Aberdeen Self Catering"} loading="lazy" decoding="async"/>
    </Link>
    <div className="accom-list-card-copy">
      <span className="accom-card-category">{stay.label}</span>
      <h3><Link href={"/"+stay.slug}>{stay.name}</Link></h3>
      <p>{stay.intro}</p>
      <div className="accom-card-meta">
        <span>{stay.sleeps ? "Up to "+stay.sleeps+" guests" : "Group stays available"}</span>
        {stay.bedrooms ? <span>{stay.bedrooms+" "+(stay.bedrooms===1?"bedroom":"bedrooms")}</span> : null}
      </div>
      <Link className="accom-card-link" href={"/"+stay.slug}>View photos &amp; details <span aria-hidden="true">→</span></Link>
    </div>
  </article>;
}
