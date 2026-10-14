import type { Metadata } from "next";
import type { Stay } from "@/lib/content";
import type { Article } from "@/lib/articles";
import { BOOKING_URL, EMAIL, PHONE } from "@/lib/content";

export const SITE_URL=(process.env.NEXT_PUBLIC_SITE_URL||"https://www.aberdeenselfcatering.co.za").replace(/\/$/,"");
export const abs=(route:string)=>new URL(route.replace(/^\//,""),SITE_URL+"/").toString();
export const BUSINESS_ID=abs("/#aberdeen-self-catering");
export const WEB_ID=abs("/#website");
export const LOGO=abs("/media/brand/aberdeen-self-catering-logo.png");
export const DEFAULT_IMAGE=abs("/media/2023/03/20230308_154512-scaled.webp");

export function pageMetadata(o:{title:string;description:string;path:string;image?:string}):Metadata{
 const full=abs(o.path), photo=o.image?abs(o.image):DEFAULT_IMAGE;
 return {
  title:{absolute:o.title},
  description:o.description,
  alternates:{canonical:full},
  openGraph:{type:"website",locale:"en_ZA",siteName:"Aberdeen Self Catering",title:o.title,description:o.description,url:full,images:[{url:photo,alt:o.title}]},
  twitter:{card:"summary_large_image",title:o.title,description:o.description,images:[photo]}
 };
}

export const siteGraph={
 "@context":"https://schema.org",
 "@graph":[
  {
   "@type":"LodgingBusiness",
   "@id":BUSINESS_ID,
   name:"Aberdeen Self Catering",
   alternateName:"Aberdeen Self-Catering",
   description:"Self-catering cottages, Karoo glamping and biker-friendly accommodation in Aberdeen, Eastern Cape, South Africa.",
   url:abs("/"),
   logo:LOGO,
   image:DEFAULT_IMAGE,
   telephone:PHONE,
   email:EMAIL,
   address:{
    "@type":"PostalAddress",
    streetAddress:"14 Andries Pretorius Street",
    addressLocality:"Aberdeen",
    addressRegion:"Eastern Cape",
    postalCode:"6270",
    addressCountry:"ZA"
   },
   sameAs:["https://www.facebook.com/AberdeenSelfCatering"],
   potentialAction:{"@type":"ReserveAction",target:BOOKING_URL}
  },
  {
   "@type":"WebSite",
   "@id":WEB_ID,
   name:"Aberdeen Self Catering",
   alternateName:"Aberdeen Self-Catering",
   url:abs("/"),
   inLanguage:"en-ZA",
   publisher:{"@id":BUSINESS_ID}
  }
 ]
};

export type Crumb={label:string;href:string};
export function breadcrumbSchema(crumbs:Crumb[]){
 return {"@context":"https://schema.org","@type":"BreadcrumbList",
  itemListElement:crumbs.map((c,i)=>({"@type":"ListItem",position:i+1,name:c.label,item:abs(c.href)}))
 };
}

export function accommodationSchema(stay:Stay){
 return {
  "@context":"https://schema.org",
  "@type":"Accommodation",
  "@id":abs("/"+stay.slug+"#accommodation"),
  name:stay.name,
  description:stay.description,
  url:abs("/"+stay.slug),
  image:stay.images.map(abs),
  ...(stay.bedrooms?{numberOfBedrooms:stay.bedrooms}:{}),
  containedInPlace:{"@id":BUSINESS_ID},
  potentialAction:{"@type":"ReserveAction",target:BOOKING_URL}
 };
}

export function articleSchema(article:Article){
 const dt=new Date(article.date+" 12:00:00 GMT+0200");
 return {
  "@context":"https://schema.org",
  "@type":"BlogPosting",
  headline:article.title,
  description:article.description,
  mainEntityOfPage:abs("/"+article.slug),
  url:abs("/"+article.slug),
  datePublished:dt.toISOString().slice(0,10),
  author:{"@id":BUSINESS_ID},
  publisher:{"@id":BUSINESS_ID},
  inLanguage:"en-ZA",
  isPartOf:{"@id":WEB_ID}
 };
}

export function cafeSchema(image:string){
 return {
  "@context":"https://schema.org",
  "@type":"CafeOrCoffeeShop",
  "@id":abs("/checkmate-coffee-cafe#cafe"),
  name:"Checkmate Coffee Café",
  description:"Coffee, breakfasts and relaxed Karoo hospitality at Aberdeen Self Catering in Aberdeen, Eastern Cape.",
  url:abs("/checkmate-coffee-cafe"),
  image:abs(image),
  address:{"@type":"PostalAddress",streetAddress:"14 Andries Pretorius Street",addressLocality:"Aberdeen",addressRegion:"Eastern Cape",postalCode:"6270",addressCountry:"ZA"},
  containedInPlace:{"@id":BUSINESS_ID}
 };
}

export function moonWalkEventSchema(){
 return {
  "@context":"https://schema.org",
  "@type":"Event",
  "@id":abs("/activities#full-moon-walk-2026-10"),
  name:"Aberdeen Full Moon Hike, Run and Cycle to Wynberg Guest Farm",
  description:"Monthly overnight Karoo event with 11 km and 21 km options for hikers, runners and cyclists. Assembly opens at 23:00 on 24 October 2026; hikers depart at 23:59, runners at 02:00 and cyclists at 03:00.",
  startDate:"2026-10-24T23:59:00+02:00",
  endDate:"2026-10-25T04:30:00+02:00",
  eventStatus:"https://schema.org/EventScheduled",
  eventAttendanceMode:"https://schema.org/OfflineEventAttendanceMode",
  location:{"@type":"Place",name:"Aberdeen Self Catering",
   address:{"@type":"PostalAddress",streetAddress:"14 Andries Pretorius Street",addressLocality:"Aberdeen",addressRegion:"Eastern Cape",postalCode:"6270",addressCountry:"ZA"}},
  image:abs("/media/aberdeen_full_moon_walk_poster.webp"),
  organizer:{"@type":"Person",name:"Jurgens Strydom",telephone:"+27823895770"},
  offers:{"@type":"Offer",url:abs("/activities"),price:"45",priceCurrency:"ZAR"}
 };
}
