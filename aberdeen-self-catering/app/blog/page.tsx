import type{Metadata}from "next";
import {pageMetadata} from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import {articles} from "@/lib/articles";
import {BOOKING_URL} from "@/lib/content";
export const metadata=pageMetadata({title:"Karoo Travel Guides | Aberdeen Hiking, Biking & Local Tips",description:"Read Aberdeen travel stories on Karoo hiking trails, motorcycle routes, heritage and Checkmate Coffee Café. Plan your visit and stay in Aberdeen.",path:"/blog"});
export default function Blog(){return <main><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Blog",href:"/blog"}]}/><section className="sub-hero"><div className="container"><p className="kicker">Stories from the Karoo</p><h1>The Aberdeen Journal</h1><p>Local inspiration on coffee, motorcycling, hiking and the character of the Eastern Cape Karoo.</p></div></section>
<section className="section"><div className="container"><div className="room-grid">{articles.map(a=><article className="page-card" key={a.slug}><p className="kicker">{a.date}</p><h3><Link href={"/"+a.slug}>{a.title}</Link></h3><p>{a.intro.slice(0,190)}…</p><Link href={"/"+a.slug} className="text-link">Read full article →</Link></article>)}</div></div></section>
<section className="promo"><div className="container promogrid"><div><h2>Experience the Karoo yourself</h2><p className="lede">Make Aberdeen your base for exploring these places and stories.</p></div><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-sand">Find accommodation ↗</a></div></section>
</main>}

