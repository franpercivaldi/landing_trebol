#!/usr/bin/env python3

import argparse
import os
from PIL import Image

# Extensiones de imagen soportadas
EXTENSIONS = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.gif'}

def convert_image(path, quality, keep_original):
    try:
        with Image.open(path) as img:
            # Para conservar transparencia en PNG/GIF
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGBA')
            else:
                img = img.convert('RGB')

            # Ruta de salida con extensión .webp
            new_path = os.path.splitext(path)[0] + '.webp'
            # Guardar en WebP con calidad y método de compresión
            img.save(new_path, 'WEBP', quality=quality, method=6)

        # Si no se conserva el original, se elimina
        if not keep_original:
            os.remove(path)

        print(f"Convertido: {path} → {new_path}")
    except Exception as e:
        print(f"Error convirtiendo {path}: {e}")


def main():
    parser = argparse.ArgumentParser(
        description='Convierte recursivamente imágenes a WebP desde el directorio dado.'
    )
    parser.add_argument(
        'directory', nargs='?', default='.',
        help='Directorio raíz (por defecto: actual)'
    )
    parser.add_argument(
        '--quality', type=int, default=80,
        help='Calidad WebP (0-100, default: 80)'
    )
    parser.add_argument(
        '--keep-original', action='store_true',
        help='Conservar archivos originales'
    )
    args = parser.parse_args()

    # Recorrer carpetas recursivamente
    for root, dirs, files in os.walk(args.directory):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in EXTENSIONS:
                full_path = os.path.join(root, file)
                convert_image(full_path, args.quality, args.keep_original)

if __name__ == '__main__':
    main()
