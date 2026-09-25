"""Home-page hero, layered for animation, from the cover art PSD's layers.

  python scripts/hero.py <layerDir>     (the PSD exported one PNG per layer; in the game repo that is
                                         release/press-kit/source/psd/)

Writes public/assets/hero/{base.jpg, fx.jpg, mage-magic.png, magic-skull.png} and content/hero.json,
which holds where each animated piece sits as percentages of the base, for app/page.tsx.
base = background + the three classes side by side, without their spells; the spells and the
sparkle layer are drawn over it by the page so they can move.
"""
import json, os, sys
from PIL import Image, ImageChops

SRC = sys.argv[1]
OUT = "public/assets/hero/"
W, H = 2876, 1620
os.makedirs(OUT, exist_ok=True)
layer = lambda n: Image.open(os.path.join(SRC, f"{n}.png")).convert("RGBA")
# PSD bounding boxes (left, top) of the layers, in the 2400x3600 cover's coordinates
BOX = {"blue-mage": (0, 231), "mage-magic": (29, 1081), "layer-29": (737, 570),
       "skeleton": (0, 1377), "magic-skull": (1707, 1508)}


def fit(im, w, h, bias_y):
    want = w / h
    cw, ch = (im.height * want, im.height) if im.width / im.height > want else (im.width, im.width / want)
    left, top = (im.width - cw) / 2, (im.height - ch) * bias_y
    return im.crop((round(left), round(top), round(left + cw), round(top + ch))).resize((w, h), Image.LANCZOS)


def edge_fade(im, lx, sc):
    """The painting stops at the cover's edges (the necromancer's cape); fade it instead of a hard cut."""
    ramp = Image.new("L", (im.width, 1))
    ramp.putdata([round(255 * max(0, min(1, (lx + x / sc) / 290, (2400 - lx - x / sc) / 290))) for x in range(im.width)])
    im.putalpha(ImageChops.multiply(im.getchannel("A"), ramp.resize(im.size)))
    return im


base = fit(layer("bg"), W, H, 0.30)
base = Image.alpha_composite(base, Image.new("RGBA", (W, H), (0, 0, 0, 60)))
boxes = {}
# (figure layer, its spell layer, scale, cover x of the body's centre, cover y of the head, hero cx, hero top)
for body, spell, sc, bx, top, cx, ty in (("blue-mage", "mage-magic", 0.62, 700, 1078, 0.24, 0.17),
                                         ("layer-29", None, 0.80, 1600, 572, 0.77, 0.20),
                                         ("skeleton", "magic-skull", 0.60, 1250, 1507, 0.50, 0.24)):
    ox, oy = W * cx - bx * sc, H * ty - top * sc
    for name in (body, spell):
        if not name:
            continue
        im, (lx, ly) = layer(name), BOX[name]
        im = im.resize((round(im.width * sc), round(im.height * sc)), Image.LANCZOS)
        x, y = round(ox + lx * sc), round(oy + ly * sc)
        if name == body:
            base.alpha_composite(edge_fade(im, lx, sc), (max(0, x), max(0, y)), (max(0, -x), max(0, -y)))
        else:
            im.save(OUT + f"{name}.png", optimize=True)
            boxes[name] = {k: round(v * 100, 3) for k, v in
                           (("left", x / W), ("top", y / H), ("width", im.width / W), ("height", im.height / H))}
base.convert("RGB").save(OUT + "base.jpg", quality=84, optimize=True, progressive=True)

# Sparkles: the cover's star layer (screen-blended over black) up top, its foreground dust at the bottom.
fx = fit(layer("magic-fx").convert("RGB"), W, H, 0.12)
dust = layer("magic-fx-foreground")
dust = dust.resize((W, round(dust.height * W / dust.width)), Image.LANCZOS)
low = Image.new("RGB", (W, H))
low.paste(dust.convert("RGB"), (0, H - dust.height), dust)
ImageChops.screen(fx, low).save(OUT + "fx.jpg", quality=82, optimize=True, progressive=True)

json.dump(boxes, open("content/hero.json", "w"), indent=2)
print(json.dumps(boxes, indent=2))
