# 🏆 Búsqueda del Tesoro en Realidad Aumentada

## 📱 Juego de AR desarrollado con AR.js y A-Frame

Bienvenido a la experiencia de **Búsqueda del Tesoro AR** del Edificio Sacré Coeur. Este es un juego interactivo de realidad aumentada donde deberás encontrar 3 marcadores distribuidos en diferentes ubicaciones para descubrir el tesoro escondido.

---

## 🎮 Cómo Jugar

### Requisitos
- Dispositivo con cámara (smartphone, tablet o laptop con webcam)
- Navegador moderno (Chrome, Safari, Firefox)
- Conexión a internet
- Permitir acceso a la cámara cuando se solicite

### Instrucciones

1. **Accede al juego** desde tu navegador
2. **Permite el acceso a la cámara** cuando se solicite
3. **Busca los marcadores AR** distribuidos en el edificio:
   - 📍 **Marcador HIRO** - El Comienzo
   - 📍 **Marcador KANJI** - El Guardián  
   - 📍 **Marcador Pattern (Letra A)** - El Secreto
4. **Apunta tu cámara** a cada marcador para revelar pistas y objetos 3D
5. **Encuentra los 3 marcadores** para completar la búsqueda y descubrir el tesoro

### Tips para mejor experiencia
- Mantén la cámara estable cuando detectes un marcador
- Asegúrate de tener buena iluminación
- Mantén una distancia de 20-50cm del marcador
- Los marcadores deben estar completamente visibles en la cámara

---

## 📍 Descarga e Impresión de Marcadores

Para jugar, necesitarás imprimir los siguientes marcadores AR:

### 🎯 Descarga Fácil
**Abre el archivo:** `descarga-marcadores.html` en tu navegador para ver y descargar todos los marcadores con instrucciones visuales.

O descarga manualmente desde estos enlaces:

### Marcador 1: HIRO (El Comienzo)
- **Descargar:** Click derecho → Guardar: [Hiro Marker](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png)
- **Ubicación sugerida:** Entrada principal o recepción

### Marcador 2: KANJI (El Guardián)
- **Descargar:** Click derecho → Guardar: [Kanji Marker](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/kanji.png)
- **URL Alternativa:** [GitHub Direct](https://github.com/AR-js-org/AR.js/blob/master/data/images/kanji.png?raw=true)
- **Ubicación sugerida:** Biblioteca o sala de estudio

### Marcador 3: Letter A (El Secreto)
- **Descargar:** Click derecho → Guardar: [Letter A Marker](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/letterA.png)
- **URL Alternativa:** [GitHub Direct](https://github.com/AR-js-org/AR.js/blob/master/data/images/letterA.png?raw=true)
- **Ubicación sugerida:** Sala de arte o cafetería

### Instrucciones de Impresión
1. Descarga cada imagen haciendo clic derecho → "Guardar imagen como..."
2. Imprime en papel blanco tamaño A4 o Carta
3. **Importante:** Imprime en alta calidad (300 DPI) y usa papel mate (NO brilloso)
4. El marcador debe medir aproximadamente **10x10 cm** (óptimo)
5. Pega el marcador en una superficie plana y visible con buena iluminación

**📖 Más info:** Consulta `markers/DESCARGAR_MARCADORES.md` para instrucciones detalladas

---

## 🚀 Deployment (Publicación)

### Opción 1: GitHub Pages

1. **Crea un repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AR Treasure Hunt"
   git branch -M main
   git remote add origin [URL_DE_TU_REPO]
   git push -u origin main
   ```

2. **Activa GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, /root
   - Save

3. **Tu juego estará disponible en:**
   ```
   https://[tu-usuario].github.io/[nombre-repo]/
   ```

### Opción 2: Azure Static Web Apps

1. **Desde Azure Portal:**
   - Crea un nuevo Static Web App
   - Conecta con tu repositorio de GitHub
   - Build Details:
     - App location: `/`
     - Api location: (dejar vacío)
     - Output location: `/`

2. **Deploy automático:** Azure hará deploy automáticamente desde GitHub

### Opción 3: Otros Servicios
- **Netlify:** Arrastra la carpeta del proyecto a netlify.com/drop
- **Vercel:** `vercel --prod`
- **Firebase Hosting:** `firebase deploy`

---

## 🛠️ Tecnologías Utilizadas

- **AR.js** - Framework de realidad aumentada basado en marcadores
- **A-Frame** - Framework para crear experiencias VR/AR con HTML
- **JavaScript** - Lógica del juego y detección de marcadores
- **HTML5 & CSS3** - Estructura y estilos de la interfaz

---

## 🎯 Características del Juego

✅ **3 marcadores AR diferentes** con objetos 3D únicos  
✅ **Sistema de progreso** que muestra cuántos marcadores has encontrado  
✅ **Pistas interactivas** que guían al jugador  
✅ **Efectos visuales** y animaciones en cada marcador  
✅ **Sonidos** al encontrar marcadores y completar el juego  
✅ **Pantalla de victoria** con animaciones y confetti  
✅ **Responsive** - funciona en móviles, tablets y desktop  
✅ **Interfaz intuitiva** con instrucciones claras  

---

## 📁 Estructura del Proyecto

```
lab_ar/
│
├── index.html          # Página principal con escena AR
├── styles.css          # Estilos de la interfaz
├── game.js            # Lógica del juego
├── README.md          # Este archivo
└── markers/           # Carpeta con imágenes de marcadores
    ├── hiro.png
    ├── kanji.png
    └── letterA.png
```

---

## 🐛 Troubleshooting

### La cámara no se activa
- Verifica que hayas dado permisos de cámara al navegador
- Asegúrate de estar usando HTTPS (GitHub Pages usa HTTPS por defecto)
- Prueba con otro navegador

### Los marcadores no se detectan
- Mejora la iluminación del lugar
- Mantén el marcador completamente visible
- Ajusta la distancia (20-50cm es ideal)
- Asegúrate de que el marcador esté bien impreso y sin brillo

### El juego no carga
- Verifica tu conexión a internet
- Abre la consola del navegador (F12) para ver errores
- Prueba en modo incógnito para descartar extensiones

---

## 👥 Para los Beta Testers (Bruno, Maxi y Gonzalo)

¡Gracias por probar nuestro juego! 

### Checklist de Pruebas:
- [ ] ¿Se carga correctamente el juego?
- [ ] ¿Funciona la cámara en tu dispositivo?
- [ ] ¿Se detectan correctamente los 3 marcadores?
- [ ] ¿Las pistas son claras y útiles?
- [ ] ¿Aparece la pantalla de victoria al final?
- [ ] ¿Los efectos visuales y sonidos funcionan?

### Reporta cualquier problema:
- Dispositivo usado (marca y modelo)
- Navegador y versión
- Descripción del problema
- Captura de pantalla si es posible

---

## 📝 Créditos

Desarrollado como parte del laboratorio de Realidad Aumentada  
**Edificio Sacré Coeur**

**Tecnologías:**
- [AR.js](https://ar-js-org.github.io/AR.js/) - AR.js Org
- [A-Frame](https://aframe.io/) - Mozilla
- Marcadores: AR.js predefined markers

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 🎉 ¡Disfruta la aventura!

¿Estás listo para encontrar el tesoro del Sacré Coeur? 🏆💎

**¡Buena suerte!** 🍀

