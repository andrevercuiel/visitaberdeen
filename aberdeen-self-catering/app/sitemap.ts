import type {MetadataRoute} from "next";
import {activities} from "@/lib/activities";
import {stays} from "@/lib/content";
import {articles} from "@/lib/articles";
import {abs} from "@/lib/seo";
const pages=["/","/accommodation","/activities","/activities/walking","/activities/cycling","/activities/moonwalk","/checkmate-coffee-cafe","/blog","/contact-us","/101km-camdeboo-challenge"];
export default function sitemap():MetadataRoute.Sitemap{
 if(process.env.SITE_LAUNCHED!=="true")return [];
 const fixed:MetadataRoute.Sitemap=[...new Set([...pages,...activities.map(item=>"/activities/"+item.slug)])].map(route=>({url:abs(route)}));
 const rooms:MetadataRoute.Sitemap=stays.map(stay=>({url:abs("/"+stay.slug),images:stay.images.map(abs)}));
 const posts:MetadataRoute.Sitemap=articles.map(article=>({url:abs("/"+article.slug)}));
 return [...fixed,...rooms,...posts];
}
