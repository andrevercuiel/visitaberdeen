import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {WHATSAPP_URL} from "@/lib/content";
export const metadata:Metadata={
 metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.aberdeenselfcatering.co.za"),
 title:{default:"Aberdeen Self Catering | Cottages & Glamping in the Karoo",template:"%s | Aberdeen Self Catering"},
 description:"Discover cottages, glamping and biker-friendly accommodation in Aberdeen, Eastern Cape. Compare rooms, browse genuine photographs and book via NightsBridge.",
 openGraph:{type:"website",locale:"en_ZA",siteName:"Aberdeen Self Catering"},
 robots:process.env.SITE_LAUNCHED==="true"?{index:true,follow:true}:{index:false,follow:false}
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body><Header/>{children}<Footer/><a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Aberdeen Self Catering">✆ <span>WhatsApp</span></a></body></html>}

