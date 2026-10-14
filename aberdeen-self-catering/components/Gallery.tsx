export default function Gallery({images,name}:{images:string[];name:string}){return <div className="gallery-grid">{images.map((src,i)=><a href={src} target="_blank" rel="noopener noreferrer" key={src+i} aria-label={"Open "+name+" image "+(i+1)}><img src={src} alt={name+" photo "+(i+1)} loading="lazy" decoding="async" width={640} height={440} /></a>)}</div>}

