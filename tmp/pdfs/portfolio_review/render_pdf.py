from pathlib import Path
import fitz

source = Path("/Users/doubaoer/Desktop/我值得更好的工作/窦桐5年经验13910972362.pdf")
output = Path("tmp/pdfs/portfolio_review")
doc = fitz.open(source)

text_parts = []
for index, page in enumerate(doc):
    text_parts.append(f"\n--- PAGE {index + 1} ---\n{page.get_text()}")
    # Long portfolio pages are rendered at a restrained review width.
    scale = 900 / page.rect.width
    pixmap = page.get_pixmap(matrix=fitz.Matrix(scale, scale), alpha=False)
    pixmap.save(output / f"page-{index + 1}.png")

(output / "content.txt").write_text("".join(text_parts), encoding="utf-8")
