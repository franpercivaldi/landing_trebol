import os
from PIL import Image

# Extensiones válidas de imagen
IMAGE_EXTENSIONS = ('.jpg', '.jpeg', '.png', '.bmp', '.tiff')

def convert_image_to_webp(image_path):
    try:
        with Image.open(image_path) as img:
            # Ruta de salida
            webp_path = os.path.splitext(image_path)[0] + '.webp'

            # Si ya existe el .webp, no lo volvemos a generar
            if os.path.exists(webp_path):
                print(f"[SKIP] Ya existe: {webp_path}")
                return

            # Convertimos a RGB si es necesario
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")

            # Guardamos en formato webp con compresión controlada
            img.save(webp_path, 'WEBP', quality=80, method=6)
            print(f"[OK] Convertido: {image_path} -> {webp_path}")
    except Exception as e:
        print(f"[ERROR] No se pudo convertir {image_path}: {e}")

def convert_images_in_directory(root_dir):
    for root, _, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(IMAGE_EXTENSIONS):
                full_path = os.path.join(root, file)
                convert_image_to_webp(full_path)

if __name__ == '__main__':
    current_directory = os.getcwd()
    convert_images_in_directory(current_directory)
