import Link from "next/link";
import {BOOKING_URL} from "@/lib/content";
import type {Article} from "@/lib/articles";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import {articleSchema} from "@/lib/seo";
export default function ArticlePage({article}:{article:Article}){return <main><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Karoo Journal",href:"/blog"},{label:article.title,href:"/"+article.slug}]}/><JsonLd data={articleSchema(article)}/><section className="sub-hero"><div className="container"><p className="kicker">Aberdeen & the Karoo · Travel Journal</p><h1>{article.title}</h1><p>{article.date}</p></div></section><section className="section"><article className="article"><p className="lede">{article.intro}</p>{article.sections.map((s,i)=><section key={i}><h2>{s.heading}</h2>{s.paragraphs?.map((p,k)=><p key={k}>{p}</p>)}{s.items&&<ul>{s.items.map((item,k)=><li key={k}>{item}</li>)}</ul>}</section>)}<div className="article-nav"><Link href="/blog" className="btn">← All articles</Link><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Book accommodation ↗</a></div></article></section></main>}

