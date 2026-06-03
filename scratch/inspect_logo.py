import os
from PIL import Image

src_path = "c:/Users/flvio/Desktop/Eco-Infinity/Eco-Infinity/assets/img/infinity1.png"

if os.path.exists(src_path):
    img = Image.open(src_path)
    print(f"Format: {img.format}, Size: {img.size}, Mode: {img.mode}")
    # Get color palette or dominant colors
    img_rgb = img.convert("RGB")
    colors = img_rgb.getcolors(maxcolors=256*256)
    if colors:
        sorted_colors = sorted(colors, key=lambda x: x[0], reverse=True)
        print("Dominant colors (count, RGB):", sorted_colors[:10])
else:
    print("File not found")
