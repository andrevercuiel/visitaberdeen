"use client";
import { usePathname } from "next/navigation";
import { photoById } from "./photos";

// One shared gallery keeps every visitor page consistent as the website grows.
const pagePhotos = {
  "/": ["street", "church", "house", "court", "wesleyan", "steeple", "church-detail"],
  "/things-to-do": ["street", "court", "wesleyan", "church", "house"],
  "/visitor-routes": ["church", "court", "wesleyan", "street", "house"],
  "/eat-drink": ["street", "house", "church"],
  "/stay": ["house", "street", "steeple"],
  "/events": ["street", "church", "house"],
  "/map": ["street", "court", "church", "steeple"],
  "/plan-your-trip": ["street", "house", "court", "church"],
  "/architecture": ["house", "court", "wesleyan", "church", "steeple"],
  "/churches": ["church", "wesleyan", "steeple", "church-detail"],
  "/discover": ["street", "house", "church", "court"],
  "/discovery-route": ["church", "court", "wesleyan", "house"],
  "/local-products": ["street", "house", "court"],
  "/explore-the-karoo": ["street", "house", "church"],
  "/join-ata": ["street", "church", "house"],
  "/member-portal": ["street", "house", "church"],
  "/visitor-info": ["street", "court", "church"],
  "/stories": ["house", "street", "court", "wesleyan"]
};

export default function PhotoGallery() {
  const pathname = usePathname() || "/";
  const keys = pagePhotos[pathname] || ["street", "church", "house"];
  const selected = keys.map(id => photoById[id]).filter(Boolean);
  const home = pathname === "/";
  return (
    <section className="photoLibrary" aria-labelledby="aberdeen-gallery-title">
      <div className="container photoLibraryInner">
        <div className="eyebrow">OUR TOWN IN PICTURES</div>
        <h2 id="aberdeen-gallery-title">{home ? "Aberdeen photo library" : "A glimpse of Aberdeen"}</h2>
        <p className="photoLibraryIntro">Explore the historic streets and landmarks that give Aberdeen its Karoo character.</p>
        <div className="photoLibraryGrid">
          {selected.map(photo => (
            <figure className="photoLibraryItem" key={photo.id}>
              <a href={photo.full} target="_blank" rel="noopener noreferrer" aria-label={"View larger photograph: " + photo.title}>
                <img src={photo.thumb} alt={photo.alt} loading="lazy" decoding="async" />
              </a>
              <figcaption>
                <strong>{photo.title}</strong>
                <a href={photo.source} target="_blank" rel="noopener noreferrer" title={"Photo details and " + photo.licence}>
                  Photo: {photo.credit} · {photo.licence} ↗
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="fine photoLibraryNote">Photographs are of Aberdeen, Eastern Cape. Open an image to see it larger, or select the credit link for the original photograph and its licence.</p>
      </div>
    </section>
  );
}
