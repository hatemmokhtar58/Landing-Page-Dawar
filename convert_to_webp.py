from PIL import Image
import os

assets_dir = r"public\assets"
extensions = (".png", ".jpg", ".jpeg")

converted = []
skipped = []

for filename in os.listdir(assets_dir):
    ext = os.path.splitext(filename)[1].lower()
    if ext in extensions:
        input_path = os.path.join(assets_dir, filename)
        output_filename = os.path.splitext(filename)[0] + ".webp"
        output_path = os.path.join(assets_dir, output_filename)

        try:
            with Image.open(input_path) as img:
                # Preserve transparency for PNG files
                if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
                    img = img.convert("RGBA")
                else:
                    img = img.convert("RGB")
                img.save(output_path, "WEBP", quality=85, method=6)
            old_size = os.path.getsize(input_path)
            new_size = os.path.getsize(output_path)
            saving = (1 - new_size / old_size) * 100
            converted.append((filename, output_filename, old_size, new_size, saving))
            print(f"✅ {filename} → {output_filename}  ({old_size//1024}KB → {new_size//1024}KB, -{saving:.1f}%)")
        except Exception as e:
            skipped.append((filename, str(e)))
            print(f"❌ {filename}: {e}")

print(f"\n{'='*60}")
print(f"Converted: {len(converted)} files | Skipped: {len(skipped)} files")
total_old = sum(x[2] for x in converted)
total_new = sum(x[3] for x in converted)
if total_old:
    print(f"Total size: {total_old//1024}KB → {total_new//1024}KB  (-{(1-total_new/total_old)*100:.1f}%)")
