from pathlib import Path
from PIL import Image, ImageOps

output = Path("public/assets/portfolio")
output.mkdir(parents=True, exist_ok=True)

portrait = ImageOps.exif_transpose(Image.open("/Users/doubaoer/Desktop/豆儿超棒/0 作品集STEP1/IMG_0735.jpg")).convert("RGB")
portrait.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
portrait.save(output / "portrait.webp", "WEBP", quality=91, method=6)

cover = ImageOps.exif_transpose(Image.open("/Users/doubaoer/Desktop/1.png")).convert("RGB")
cover.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
cover.save(output / "spring-festival-cover.webp", "WEBP", quality=92, method=6)
