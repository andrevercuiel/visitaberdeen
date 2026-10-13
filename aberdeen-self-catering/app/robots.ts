import type {MetadataRoute} from "next";
export default function robots():MetadataRoute.Robots {const launched=process.env.SITE_LAUNCHED==="true";const url=process.env.NEXT_PUBLIC_SITE_URL||"https://www.aberdeenselfcatering.co.za";return {rules:launched?{userAgent:"*",allow:"/"}:{userAgent:"*",disallow:"/"},sitemap:launched?url+"/sitemap.xml":undefined}}

