import "./style.css";
import PhotoGallery from "./PhotoGallery";

export const metadata = {
  metadataBase: new URL("https://visitaberdeen.co.za"),
  title: { default: "Visit Aberdeen, Eastern Cape | Karoo Travel Guide", template: "%s | Visit Aberdeen" },
  description: "Plan your trip to Aberdeen, Eastern Cape, South Africa. Find things to do, places to stay, local food, events, historic sites and Karoo visitor information.",
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

const nav = [
  ["Things to Do", "/things-to-do"],
  ["Eat & Drink", "/eat-drink"],
  ["Stay", "/stay"],
  ["Events", "/events"],
  ["Visitor Map", "/map"],
  ["Plan a Visit", "/plan-your-trip"]
];

export default function RootLayout({ children }) {
  return <html lang="en"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    <a className="skipLink" href="#main-content">Skip to content</a>
    <header className="siteHeader">
      <a className="brand" href="/" aria-label="Visit Aberdeen home">VISIT <b>ABERDEEN</b><small>EASTERN CAPE · SOUTH AFRICA</small></a>
      <nav aria-label="Main navigation">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    </header>
    <div id="main-content">{children}<PhotoGallery /></div>
    <footer>
      <div className="footerInner">
        <div><strong>Visit Aberdeen</strong><p>Slow down and discover our Karoo town, its people and its places.</p><p>Aberdeen · Dr Beyers Naudé · Eastern Cape</p></div>
        <div><strong>Explore</strong><p><a href="/things-to-do">Things to Do</a> · <a href="/discovery-route">Audio Discovery Route</a> · <a href="/visitor-info">Visitor Information</a></p><p><a href="/local-products">Local Products</a> · <a href="/explore-the-karoo">Explore the Karoo</a> · <a href="/stories">Town Stories</a></p></div>
        <div><strong>Aberdeen Tourism Association</strong><p><a href="/join-ata">Join ATA</a> · <a href="/member-portal">Member Portal</a></p><p className="fine">Listings and experiences may require booking or prior arrangement. Association membership is not implied.</p></div>
      </div>
    </footer>
  </body></html>;
}
