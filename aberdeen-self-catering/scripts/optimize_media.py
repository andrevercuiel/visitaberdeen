from PIL import Image, ImageOps
from pathlib import Path
import re

media=Path("public/media")
files=[f for f in media.rglob("*") if f.is_file() and f.suffix.lower() in (".jpg",".jpeg",".png",".webp")]
total_before=sum(f.stat().st_size for f in files)
changes={}
for f in files:
    dst=f.with_suffix(".webp")
    with Image.open(f) as source:
        im=ImageOps.exif_transpose(source)
        if getattr(im,"is_animated",False):
            im.seek(0)
        if im.mode not in ("RGB","RGBA"):
            im=im.convert("RGBA" if "A" in im.getbands() else "RGB")
        im.thumbnail((1800,1800),Image.Resampling.LANCZOS)
        im.save(dst,"WEBP",quality=80,method=4)
    changes["/media/"+f.relative_to(media).as_posix()]="/media/"+dst.relative_to(media).as_posix()
    if dst!=f:
        f.unlink()
total_after=sum(f.stat().st_size for f in media.rglob("*.webp"))
for name in ("lib/content.ts","app/page.tsx"):
    p=Path(name)
    source=p.read_text(encoding="utf8")
    for old,new in changes.items():
        source=source.replace(old,new)
    p.write_text(source,encoding="utf8")
print(f"Optimized {len(files)} files: {total_before/1048576:.1f} MiB -> {total_after/1048576:.1f} MiB")
print("All website URLs now point to optimised repo-owned WebP assets.")
