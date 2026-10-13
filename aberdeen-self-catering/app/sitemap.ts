import type {MetadataRoute} from "next";
import {stays} from "@/lib/content";
import {articles} from "@/lib/articles";
export default function sitemap():MetadataRoute.Sitemap{if(process.env.SITE_LAUNCHED!=="true")return [];const base=process.env.NEXT_PUBLIC_SITE_URL||"https://www.aberdeenselfcatering.co.za";const routes=["/","/accommodation","/activities","/event-venue","/checkmate-coffee-cafe","/blog","/contact-us","/101km-camdeboo-challenge",...stays.map(s=>"/"+s.slug),...articles.map(a=>"/"+a.slug)];return routes.map(route=>({url:base+route,changeFrequency:route==="/"?"weekly":"monthly",priority:route==="/"?1:.7}))}

