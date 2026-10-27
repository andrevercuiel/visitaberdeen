"use client";
import {usePathname} from "next/navigation";
import {photoById} from "./photos";
const photoSets = {
  "/": ["street","church","house","court","wesleyan","steeple","church-detail"],
  "/things-to-do":["street","court","church"],
  "/visitor-routes":["church","court","wesleyan"],
  "/architecture":["house","court","wesleyan"],
  "/churches":["church","wesleyan","steeple"],
  "/discovery-route":["church","court","house"],
  "/events":["street","church","house"],
  "/eat-drink":["street","house","court"],
  "/stay":["house","street","steeple"]
};
export default function PhotoGallery(){
 const path=usePathname()||"/";
 if(path==="/join-ata"||path==="/member-portal") return null;
 const keys=photoSets[path]||["street","house","court"];
 const selected=keys.map(id=>photoById[id]).filter(Boolean);
 return <section className="photoLibrary calmGallery" aria-label="Aberdeen photographs">
   <div className="container galleryContainer">
     <details className="galleryDisclosure">
       <summary><span>Photographs of Aberdeen</span><span aria-hidden="true">＋</span></summary>
       <p className="fine">A small photo library from Aberdeen, Eastern Cape. Open a photograph to view the original, with photographer credit.</p>
       <div className="photoLibraryGrid">
         {selected.map(photo=><figure className="photoLibraryItem" key={photo.id}>
           <a href={photo.full} target="_blank" rel="noopener noreferrer" aria-label={"Open photograph: "+photo.title}><img src={photo.thumb} alt={photo.alt} loading="lazy" decoding="async"/></a>
           <figcaption><strong>{photo.title}</strong><a href={photo.source} target="_blank" rel="noopener noreferrer">Photo: {photo.credit} · {photo.licence}</a></figcaption>
         </figure>)}
       </div>
     </details>
   </div>
 </section>;
}
