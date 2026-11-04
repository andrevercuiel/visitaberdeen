"use client";
import {usePathname} from "next/navigation";
import {photoById} from "./photos";
const photoSets = {
  "/": ["karoo-home","ng-church","pizza","check-mate","cycling","walking-view"],
  "/things-to-do": ["cycling","running","four-wheel-drive","walking-view","hiking","ng-church"],
  "/visitor-routes": ["ng-church","veranda","biblical-panel","pizza","cycling","walking-view"],
  "/architecture": ["karoo-home","veranda","garden-home","church-gable","stonework","veranda-detail"],
  "/churches": ["ng-church","church-skyline","biblical-panel","church-gable","stonework"],
  "/discovery-route": ["ng-church","veranda","karoo-home","veranda-detail"],
  "/events": ["running","cycling","walking-view"],
  "/eat-drink": ["cafe-conversation","pizza","check-mate","diner"],
  "/explore-the-karoo": ["cycling","running","four-wheel-drive","walking-view","hiking"],
  "/stay": ["house","street","steeple"]
};
export default function PhotoGallery(){
 const path=usePathname()||"/";
 if(path==="/join-ata"||path==="/member-portal") return null;
 const keys=photoSets[path]||["karoo-home","ng-church","walking-view"];
 const selected=keys.map(id=>photoById[id]).filter(Boolean);
 return <section className="photoLibrary calmGallery" aria-label="Aberdeen photographs">
   <div className="container galleryContainer">
     <details key={path} className="galleryDisclosure" open={["/architecture", "/churches", "/eat-drink", "/things-to-do", "/explore-the-karoo"].includes(path)}>
       <summary><span>Photographs of Aberdeen</span><span aria-hidden="true">＋</span></summary>
       <p className="fine">A glimpse of Aberdeen and the surrounding Karoo. Select a photograph to see a larger view.</p>
       <div className="photoLibraryGrid">
         {selected.map(photo=><figure className="photoLibraryItem" key={photo.id}>
           <a href={photo.full} target="_blank" rel="noopener noreferrer" aria-label={"Open photograph: "+photo.title}><img src={photo.thumb} alt={photo.alt} loading="lazy" decoding="async" width={photo.width} height={photo.height}/></a>
           <figcaption><strong>{photo.title}</strong>{photo.source && <a href={photo.source} target="_blank" rel="noopener noreferrer">Photo: {photo.credit} · {photo.licence}</a>}</figcaption>
         </figure>)}
       </div>
     </details>
   </div>
 </section>;
}
