import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {stayBySlug,stays} from "@/lib/content";
import {articleBySlug,articles} from "@/lib/articles";
import DetailPage from "@/components/DetailPage";
import ArticlePage from "@/components/ArticlePage";
type Params={params:Promise<{slug:string}>};
export function generateStaticParams(){return [...stays.map(s=>({slug:s.slug})),...articles.map(a=>({slug:a.slug}))]}
export async function generateMetadata({params}:Params):Promise<Metadata>{
 const {slug}=await params;const stay=stayBySlug[slug];const article=articleBySlug[slug];
 if(stay)return {title:stay.name+" | Karoo Accommodation in Aberdeen",description:stay.intro+" Explore photographs, full amenities and book directly.",alternates:{canonical:"/"+slug},openGraph:{images:[{url:stay.images[0],alt:stay.name}]}};
 if(article)return {title:article.title,description:article.description,alternates:{canonical:"/"+slug}};
 return {};
}
export default async function SlugPage({params}:Params){const {slug}=await params;const stay=stayBySlug[slug];if(stay)return <DetailPage stay={stay}/>;const article=articleBySlug[slug];if(article)return <ArticlePage article={article}/>;notFound()}

