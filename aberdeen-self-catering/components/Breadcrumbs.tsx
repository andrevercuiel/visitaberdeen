import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {breadcrumbSchema,type Crumb} from "@/lib/seo";
export default function Breadcrumbs({items}:{items:Crumb[]}){
 return <>
  <nav className="breadcrumbs container" aria-label="Breadcrumb">
   <ol>{items.map((item,i)=><li key={item.href}>{i<items.length-1?<Link href={item.href}>{item.label}</Link>:<span aria-current="page">{item.label}</span>}</li>)}</ol>
  </nav>
  <JsonLd data={breadcrumbSchema(items)}/>
 </>;
}
