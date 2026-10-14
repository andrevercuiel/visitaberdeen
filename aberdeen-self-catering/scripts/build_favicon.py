from pathlib import Path
from PIL import Image, ImageOps

root=Path(".")
source=root/"public/media/brand/aberdeen-self-catering-logo.png"
assert source.is_file(), "The official Aberdeen Self Catering logo is missing"
original=Image.open(source).convert("RGBA")
print(f"Original logo: {original.size[0]} x {original.size[1]}")

def favicon(size:int)->Image.Image:
    canvas=Image.new("RGBA",(size,size),(255,255,255,255))
    logo=ImageOps.contain(original,(int(size*.87),int(size*.87)),Image.Resampling.LANCZOS)
    canvas.alpha_composite(logo,((size-logo.width)//2,(size-logo.height)//2))
    return canvas.convert("RGB")

icon=favicon(96)
icon.save(root/"app/icon.png",format="PNG",optimize=True)
favicon(180).save(root/"app/apple-icon.png",format="PNG",optimize=True)
favicon(64).save(root/"public/favicon.ico",format="ICO",sizes=[(16,16),(32,32),(48,48),(64,64)])
print("Created Google-friendly square 96px favicon, 180px Apple touch icon and standard .ico from the official logo.")
