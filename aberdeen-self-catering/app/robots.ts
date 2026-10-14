import type {MetadataRoute} from "next";
import {abs} from "@/lib/seo";
export default function robots():MetadataRoute.Robots{
 const launched=process.env.SITE_LAUNCHED==="true";
 return {
  rules:launched?{userAgent:"*",allow:"/"}:{userAgent:"*",disallow:"/"},
  ...(launched?{sitemap:abs("/sitemap.xml")}:{})
 };
}
