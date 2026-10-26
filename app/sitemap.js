const routes = [
  "", "things-to-do", "eat-drink", "stay", "events", "map", "plan-your-trip",
  "architecture", "churches", "discover", "discovery-route", "explore-the-karoo",
  "local-products", "stories", "visitor-info", "join-ata"
];

export default function sitemap() {
  return routes.map((route) => ({
    url: "https://visitaberdeen.co.za/" + route,
  }));
}
