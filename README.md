# Ingeniería y Consultoría Ambiental — versión estática

Versión preparada para GitHub Pages. No requiere Python, Flask, SQLite ni servidor.

## Publicar en GitHub Pages
1. Crea un repositorio nuevo en GitHub.
2. Sube **el contenido de esta carpeta** a la raíz del repositorio (no la carpeta contenedora).
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`.
6. Guarda. GitHub mostrará la URL pública cuando finalice el despliegue.

## Qué cambió respecto a Flask
- Las páginas Jinja fueron convertidas a HTML estático.
- Los 3 artículos del blog son archivos HTML independientes.
- El formulario de contacto conserva sus campos y abre WhatsApp con la información diligenciada.
- Se eliminó la necesidad de base de datos, panel administrativo y backend Flask.
- Los videos, imágenes, CSS y JavaScript se conservan localmente en `static/`.

## Edición futura
Al ser estático, cualquier cambio en contenido se hace directamente en los archivos `.html`. Para agregar un artículo, crea otro HTML y enlázalo desde `blog.html` e `index.html`.
