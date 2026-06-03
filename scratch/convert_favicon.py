import os
from PIL import Image

src_path = "c:/Users/flvio/Desktop/Eco-Infinity/Eco-Infinity/assets/img/infinity1.png"
dest_ico_path = "c:/Users/flvio/Desktop/Eco-Infinity/Eco-Infinity/public/favicon.ico"
dest_png_path = "c:/Users/flvio/Desktop/Eco-Infinity/Eco-Infinity/public/favicon.png"

try:
    if os.path.exists(src_path):
        img = Image.open(src_path)
        
        # Save as ICO with multiple standard resolutions
        img.save(dest_ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128)])
        print(f"Successfully converted and saved {dest_ico_path}")
        
        # Also save as a PNG favicon fallback
        img.save(dest_png_path, format="PNG")
        print(f"Successfully saved fallback {dest_png_path}")
    else:
        print(f"Source file not found at {src_path}")
except Exception as e:
    print(f"Error during conversion: {e}")
