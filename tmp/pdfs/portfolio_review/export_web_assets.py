from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter

source_dir = Path("tmp/pdfs/portfolio_review")
output_dir = Path("public/assets/portfolio")
output_dir.mkdir(parents=True, exist_ok=True)


def cover(page: int, box: tuple[int, int, int, int], name: str) -> None:
    image = Image.open(source_dir / f"page-{page}.png").convert("RGB")
    crop = image.crop(box)
    crop = crop.resize((1400, 946), Image.Resampling.LANCZOS)
    crop = ImageEnhance.Contrast(crop).enhance(1.04)
    crop.save(output_dir / f"{name}-cover.webp", "WEBP", quality=90, method=6)


def detail(page: int, name: str) -> None:
    image = Image.open(source_dir / f"page-{page}.png").convert("RGB")
    image.save(output_dir / f"{name}-detail.webp", "WEBP", quality=86, method=6)


# Covers preserve the strongest project-title / key-visual regions from the PDF.
cover(2, (0, 0, 900, 610), "spring-festival")
cover(3, (0, 0, 900, 610), "growth-ads")
cover(4, (0, 0, 900, 610), "training-event")
cover(5, (0, 500, 900, 1110), "aigc-lab")

# The portrait is taken from the resume card on page one.
portrait_page = Image.open(source_dir / "page-1.png").convert("RGB")
portrait = portrait_page.crop((535, 570, 815, 950)).resize((840, 1100), Image.Resampling.LANCZOS)
portrait.save(output_dir / "portrait.webp", "WEBP", quality=92, method=6)

for page, name in [(2, "spring-festival"), (3, "growth-ads"), (4, "training-event"), (5, "aigc-lab")]:
    detail(page, name)
