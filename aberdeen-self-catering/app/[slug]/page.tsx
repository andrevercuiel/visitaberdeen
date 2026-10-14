import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {stayBySlug,stays} from "@/lib/content";
import {articleBySlug,articles} from "@/lib/articles";
import {pageMetadata} from "@/lib/seo";
import DetailPage from "@/components/DetailPage";
import ArticlePage from "@/components/ArticlePage";
type Params={params:Promise<{slug:string}>};
export function generateStaticParams(){return [...stays.map(s=>({slug:s.slug})),...articles.map(a=>({slug:a.slug}))]}
export async function generateMetadata({params}:Params):Promise<Metadata>{
 const {slug}=await params;const stay=stayBySlug[slug];const article=articleBySlug[slug];
 if(stay) return pageMetadata({
  title:stay.name+" | Self-Catering in Aberdeen, Eastern Cape",
  description:stay.intro+" Explore facilities, photos and direct booking at Aberdeen Self Catering.",
  path:"/"+slug,image:stay.images[0]
 });
 if(article) return pageMetadata({title:article.title+" | Aberdeen Karoo Guide",description:article.description,path:"/"+slug});
 return {};
}
export default async function SlugPage({params}:Params){
 const {slug}=await params;const stay=stayBySlug[slug];
 if(stay)return <DetailPage stay={stay}/>;
 const article=articleBySlug[slug];if(article)return <ArticlePage article={article}/>;
 notFound();
}
