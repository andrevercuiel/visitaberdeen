import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {WHATSAPP_URL} from "@/lib/content";
import {DEFAULT_IMAGE,SITE_URL,siteGraph} from "@/lib/seo";
const published=process.env.SITE_LAUNCHED==="true";
export const metadata:Metadata={
 metadataBase:new URL(SITE_URL),
 applicationName:"Aberdeen Self Catering",
 title:{default:"Aberdeen Self Catering | Self-Catering Accommodation in Aberdeen",template:"%s | Aberdeen Self Catering"},
 description:"Self-catering cottages, glamping and biker-friendly accommodation in Aberdeen, Eastern Cape. Explore real photos and book your Karoo stay directly.",
 openGraph:{type:"website",locale:"en_ZA",siteName:"Aberdeen Self Catering",url:SITE_URL,images:[{url:DEFAULT_IMAGE,alt:"Aberdeen Self Catering accommodation in the Karoo"}]},
 twitter:{card:"summary_large_image",images:[DEFAULT_IMAGE]},
 robots:published?{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}}:{index:false,follow:false},
 formatDetection:{telephone:false,email:false,address:false}
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en-ZA"><body><JsonLd data={siteGraph}/><Header/>{children}<Footer/><a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Aberdeen Self Catering">✆ <span>WhatsApp</span></a></body></html>;
}
