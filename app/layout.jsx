import "./style.css";
import PhotoGallery from "./PhotoGallery";

export const metadata = {
  metadataBase: new URL("https://visitaberdeen.co.za"),
  title: { default: "Visit Aberdeen | Discover the Karoo", template: "%s | Visit Aberdeen" },
  description: "Discover activities in Aberdeen, Eastern Cape: heritage walks, local art, Karoo food, gardens, nature, places to stay and events.",
  openGraph: { title: "Visit Aberdeen — Discover the Karoo", description: "Things to do, eat and see in Aberdeen, Eastern Cape.", url: "https://visitaberdeen.co.za", siteName: "Visit Aberdeen", locale: "en_ZA", type: "website" }
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
