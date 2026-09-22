"""Re-colour the white Kenney Fantasy UI Borders art (CC0) into the site's gold frames.

Run from the repo root: python scripts/tint-ui.py   (needs Pillow)
Sources are the three originals kept in public/ui/kenney/; outputs go to public/ui/.
"""
from PIL import Image, ImageChops, ImageFilter

SRC = "public/ui/kenney/"
OUT = "public/ui/"
TOP, BOTTOM = (236, 214, 158), (150, 118, 66)


def tint(src: str, dst: str, gradient: bool) -> None:
    alpha = Image.open(SRC + src).convert("RGBA").split()[3]
    w, h = alpha.size
    gold = Image.new("RGBA", (w, h))
    for y in range(h):
        t = y / (h - 1) if gradient else 0.25
        c = tuple(round(a + (b - a) * t) for a, b in zip(TOP, BOTTOM))
        gold.paste(c + (255,), (0, y, w, y + 1))
    gold.putalpha(alpha)
    shadow = Image.new("RGBA", (w, h), (0, 0, 0, 255))
    shadow.putalpha(ImageChops.multiply(alpha.filter(ImageFilter.MaxFilter(5)), Image.new("L", (w, h), 220)))
    Image.alpha_composite(shadow, gold).save(OUT + dst, optimize=True)


tint("panel-border-010.png", "frame-ornate.png", True)
tint("panel-border-008.png", "frame-simple.png", True)
tint("divider-fade-003.png", "divider.png", False)

# Left half of a centred divider, cut through the middle of the cross ornament; the right
# half is the same image mirrored in CSS.
Image.open(OUT + "divider.png").crop((0, 0, 174, 36)).save(OUT + "divider-half.png", optimize=True)
