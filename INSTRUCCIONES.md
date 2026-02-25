# ProfeDesk — Instrucciones de instalación como PWA

## Archivos incluidos
- `index.html` → la app completa
- `manifest.json` → configuración de la PWA
- `sw.js` → service worker (permite uso offline)
- `icon-192.png` / `icon-512.png` → íconos de la app

---

## Opción A: Netlify (MÁS FÁCIL — 2 minutos)

1. Entrá a https://netlify.com y creá una cuenta gratis
2. Una vez dentro, en el panel principal buscá el área que dice **"drag and drop your site folder here"**
3. Arrastrá la **carpeta profedesk** completa ahí
4. Netlify te da una URL tipo `https://abc123.netlify.app`
5. Abrí esa URL en el celu → aparece el banner "Agregar a pantalla de inicio"
6. ¡Listo! Ya la tenés instalada como app

---

## Opción B: GitHub Pages

1. Creá una cuenta en https://github.com
2. Creá un repositorio nuevo (botón verde "New"), llamalo `profedesk`, marcá "Public"
3. Subí los 5 archivos (index.html, manifest.json, sw.js, icon-192.png, icon-512.png)
4. Andá a Settings → Pages → Source: seleccioná "main" y carpeta "/ (root)" → Save
5. En unos minutos tenés una URL tipo `https://tuusuario.github.io/profedesk`
6. Abrí esa URL en el celu → instalala desde el navegador

---

## Cómo instalar en el celular (Android - Chrome)

1. Abrí la URL en Chrome
2. Aparece un banner abajo que dice "Agregar ProfeDesk a la pantalla de inicio"
3. Tocás "Instalar" → listo, aparece el ícono en tu pantalla

Si no aparece el banner automático:
- Tocá los 3 puntos ⋮ arriba a la derecha
- "Agregar a pantalla de inicio"

## Cómo instalar en iPhone (Safari)

1. Abrí la URL en Safari (importante: tiene que ser Safari)
2. Tocá el botón compartir 􀈂 (el cuadrado con la flechita)
3. "Agregar a pantalla de inicio"
4. Poné el nombre "ProfeDesk" → Agregar

---

## Sobre los datos

- Los datos se guardan en el dispositivo (localStorage)
- Usá los botones ⬇️ Exportar / ⬆️ Importar del encabezado para sincronizar entre celu y tablet
- La app funciona sin internet una vez instalada
