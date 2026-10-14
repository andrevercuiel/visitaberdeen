// The source data is authored in this repository; encode HTML-sensitive characters when embedding JSON.
export default function JsonLd({data}:{data:unknown}) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,"\\u003c")}}/>;
}
