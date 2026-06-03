import os
from PIL import Image

src_path = "C:/Users/flvio/.gemini/antigravity-ide/brain/07a98fd6-8552-4280-8266-a0e90e5c7189/planet_raw_1780491186526.png"
dest_ico_path = "c:/Users/flvio/Desktop/Eco-Infinity/Eco-Infinity/public/favicon.ico"
dest_png_path = "c:/Users/flvio/Desktop/Eco-Infinity/Eco-Infinity/public/favicon.png"

try:
    if os.path.exists(src_path):
        img = Image.open(src_path).convert("RGBA")
        
        # In Chrome, opening raw SVG directly can render a solid background.
        # Let's detect the corner pixel color to determine the background color.
        datas = img.getdata()
        corner_pixel = datas[0] # Top-left corner
        
        # If the corner is solid white, grey, or black, let's make it transparent.
        # Chrome default SVG viewer background is often #0E0E0E (dark) or #FFFFFF (light).
        # We can make pixels matching the corner pixel color transparent.
        new_data = []
        for item in datas:
            # If the pixel is very close to the corner pixel color, make it transparent
            dist = sum(abs(a - b) for a, b in zip(item[:3], corner_pixel[:3]))
            if dist < 15: # threshold for slight compression noise
                new_data.append((0, 0, 0, 0)) # transparent
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        
        # Crop to bounding box of non-transparent pixels for a perfectly centered icon
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        # Create a square icon
        w, h = img.size
        size = max(w, h)
        square_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        # Center the cropped image on the square canvas
        square_img.paste(img, ((size - w) // 2, (size - h) // 2))
        
        # Save as ICO with standard sizes
        square_img.save(dest_ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128)])
        print(f"Successfully saved transparent favicon to {dest_ico_path}")
        
        # Also save as transparent PNG
        square_img.save(dest_png_path, format="PNG")
        print(f"Successfully saved transparent fallback to {dest_png_path}")
    else:
        print("Screenshot not found at the specified path")
except Exception as e:
    print(f"Error during conversion: {e}")
