import "./style.css";
import PhotoGallery from "./PhotoGallery";

export const metadata = {
  metadataBase: new URL("https://visitaberdeen.co.za"),
  title: { default: "Visit Aberdeen, Eastern Cape | Karoo Travel Guide", template: "%s | Visit Aberdeen" },
  description: "Discover Aberdeen, Eastern Cape. Explore Karoo heritage and activities, where to eat, places to stay, events and a self-guided visitor route.",
  applicationName: "Visit Aberdeen",
  openGraph: { siteName: "Visit Aberdeen", locale: "en_ZA", type: "website" },
  twitter: { card: "summary" }
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": "https://visitaberdeen.co.za/#website", name: "Visit Aberdeen", url: "https://visitaberdeen.co.za/", inLanguage: "en-ZA", description: "Tourism and visitor information for Aberdeen, Eastern Cape, South Africa." },
    { "@type": "Organization", "@id": "https://visitaberdeen.co.za/#association", name: "Aberdeen Tourism Association", url: "https://visitaberdeen.co.za/" }
  ]
};
const navigation = [
  ["Explore", "/things-to-do"],
  ["Eat & Drink", "/eat-drink"],
  ["Stay", "/stay"],
  ["Events", "/events"]
];

export default function RootLayout({children}) {
  return <html lang="en"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteSchema)}}/>
    <a className="skipLink" href="#main-content">Skip to content</a>
    <header className="siteHeader quietHeader">
      <a className="brand" href="/" aria-label="Visit Aberdeen home">VISIT <b>ABERDEEN</b><small>EASTERN CAPE · SOUTH AFRICA</small></a>
      <nav className="desktopNav" aria-label="Main navigation">
        {navigation.map(([label,href])=><a href={href} key={href}>{label}</a>)}
        <a className="navCta" href="/plan-your-trip">Plan your visit</a>
      </nav>
      <details className="mobileNav">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {navigation.map(([label,href])=><a href={href} key={href}>{label}</a>)}
          <a href="/plan-your-trip">Plan your visit</a>
          <a href="/map">Visitor map</a>
        </nav>
      </details>
    </header>
    <div id="main-content">{children}<PhotoGallery/></div>
    <footer className="quietFooter">
      <div className="footerInner">
        <div><strong>Visit Aberdeen</strong><p>Slow down. Stay a little. Discover the Karoo.</p><p className="fine">Aberdeen · Eastern Cape · South Africa</p></div>
        <div className="footerLinks">
          <a href="/visitor-routes">Tourism routes</a>
          <a href="/discovery-route">Audio tour</a>
          <a href="/map">Visitor map</a>
          <a href="/visitor-info">Visitor information</a>
          <a href="/join-ata">Join ATA</a>
        </div>
      </div>
    </footer>
  </body></html>;
}
