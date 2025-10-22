# 📍 Información sobre los Marcadores AR

## Marcadores Utilizados en el Juego

Este juego utiliza **3 marcadores predefinidos de AR.js** que son ampliamente compatibles y fáciles de detectar.

---

## 🎯 Marcador 1: HIRO (El Comienzo)

- **Preset:** `hiro`
- **Nombre del patrón:** Hiro
- **Origen:** Marcador estándar de AR.js (más popular)
- **Dificultad de detección:** ⭐⭐⭐⭐⭐ (Muy fácil)

**Descargar imagen:**
```
https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png
```

**Características del objeto AR:**
- Texto flotante con la primera pista
- Libro 3D giratorio (color café)
- Anillo verde pulsante en la base
- Animación de rotación continua

**Pista que muestra:**
```
"En el corazón del edificio,
donde los libros descansan,
encontrarás la siguiente pista."
```

---

## 🎯 Marcador 2: KANJI (El Guardián)

- **Preset:** `kanji`
- **Nombre del patrón:** Kanji
- **Origen:** Marcador estándar de AR.js
- **Dificultad de detección:** ⭐⭐⭐⭐⭐ (Muy fácil)

**Descargar imagen:**
```
https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/kanji.png
```

**Características del objeto AR:**
- Texto flotante con la segunda pista
- Esfera azul brillante (el guardián)
- Esfera translúcida exterior que pulsa
- Flechas doradas indicadoras
- Animación vertical de flotación

**Pista que muestra:**
```
"El guardián del conocimiento
te señala el camino.
Busca donde el arte se encuentra."
```

---

## 🎯 Marcador 3: PATTERN / LETTER A (El Secreto)

- **Type:** `pattern`
- **Preset:** `custom`
- **Patrón:** Letter A (Letra A)
- **Origen:** Marcador de patrón personalizado de AR.js
- **Dificultad de detección:** ⭐⭐⭐⭐ (Fácil)

**Descargar imagen:**
```
https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/letterA.png
```

**URL del patrón .patt:**
```
https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/data/patt.letterA
```

**Características del objeto AR:**
- Texto flotante con la pista final
- Cofre del tesoro dorado
- Tapa del cofre que se abre y cierra
- Estrellas amarillas giratorias
- Animación de apertura del cofre

**Pista que muestra:**
```
"El tesoro está cerca.
Mira hacia el cielo,
donde las estrellas brillan."
```

---

## 🖨️ Guía de Impresión

### Tamaño Recomendado:
- **Mínimo:** 7x7 cm
- **Óptimo:** 10x10 cm
- **Máximo:** 15x15 cm

### Calidad de Impresión:
- **Resolución:** 300 DPI mínimo
- **Papel:** Blanco mate (evitar brilloso)
- **Color:** Blanco y negro (alta calidad)

### Tips:
1. Imprimir en impresora láser para mejor calidad
2. Evitar impresoras inkjet de baja calidad
3. Si el papel es muy delgado, pegar sobre cartón
4. Mantener los marcadores planos (no doblar)
5. Proteger con mica transparente mate (opcional)

---

## 📏 Distancia de Detección

Estos marcadores funcionan mejor a estas distancias:

| Tamaño del Marcador | Distancia Óptima | Rango de Detección |
|---------------------|------------------|-------------------|
| 7x7 cm             | 15-25 cm         | 10-35 cm          |
| 10x10 cm           | 20-40 cm         | 15-60 cm          |
| 15x15 cm           | 30-60 cm         | 20-100 cm         |

---

## 💡 Ubicaciones Sugeridas en el Edificio

### Marcador 1 (HIRO) - "El Comienzo"
**Lugares recomendados:**
- Entrada principal
- Recepción
- Hall central
- Cartelera de anuncios

**Justificación:** Debe ser fácil de encontrar para comenzar el juego

---

### Marcador 2 (KANJI) - "El Guardián"
**Lugares recomendados:**
- Biblioteca
- Sala de estudio
- Pasillo de aulas
- Cafetería

**Justificación:** La pista habla del "guardián del conocimiento", ideal para zona académica

---

### Marcador 3 (LETTER A) - "El Secreto"
**Lugares recomendados:**
- Sala de arte
- Azotea (si es accesible)
- Ventana con vista al cielo
- Patio o jardín

**Justificación:** La pista menciona "mira hacia el cielo", ideal para lugares abiertos o con ventanas

---

## 🔧 Configuración Técnica

### En el código HTML:

**Marcador HIRO:**
```html
<a-marker preset="hiro" id="marker-hiro" emitevents="true" smooth="true">
```

**Marcador KANJI:**
```html
<a-marker preset="kanji" id="marker-kanji" emitevents="true" smooth="true">
```

**Marcador LETTER A:**
```html
<a-marker 
  type="pattern" 
  preset="custom" 
  url="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/data/patt.letterA" 
  id="marker-pattern" 
  emitevents="true" 
  smooth="true">
```

### Eventos JavaScript:
- `markerFound` - Se dispara cuando se detecta el marcador
- `markerLost` - Se dispara cuando se pierde el marcador

---

## 🎨 Personalización Avanzada (Opcional)

Si quieres crear tus propios marcadores personalizados:

1. **AR.js Marker Training:**
   https://ar-js-org.github.io/AR.js/marker-training/

2. **Sube tu imagen** (debe tener buen contraste)
3. **Descarga el archivo .patt**
4. **Reemplaza en el código:**
   ```html
   <a-marker type="pattern" url="ruta/a/tu/patron.patt">
   ```

### Consideraciones:
- Imágenes con alto contraste funcionan mejor
- Evitar patrones demasiado simples o simétricos
- Probar la detección antes de imprimir múltiples copias

---

## ✅ Checklist de Preparación

Antes del día del juego:

- [ ] Imprimir los 3 marcadores en buena calidad
- [ ] Proteger/laminar los marcadores (opcional)
- [ ] Elegir ubicaciones estratégicas
- [ ] Pegar los marcadores en superficies visibles
- [ ] Probar la detección en cada ubicación
- [ ] Ajustar iluminación si es necesario
- [ ] Tomar nota de las ubicaciones exactas
- [ ] Tener marcadores de respaldo por si se dañan

---

## 🐛 Troubleshooting

### Marcador no se detecta:
- ✅ Verificar iluminación (evitar sombras y reflejos)
- ✅ Limpiar la lente de la cámara
- ✅ Verificar que el marcador esté plano
- ✅ Ajustar distancia de la cámara
- ✅ Reimprimir si está dañado o pixelado

### Detección intermitente:
- ✅ Estabilizar el marcador (pegarlo firmemente)
- ✅ Mejorar iluminación ambiental
- ✅ Evitar movimientos bruscos de la cámara
- ✅ Verificar que no haya brillos en el papel

---

## 📦 Archivos Incluidos

En esta carpeta `markers/` encontrarás:

- `INFO_MARCADORES.md` - Este archivo
- Enlaces a los marcadores oficiales de AR.js
- Instrucciones de impresión y uso

---

## 🔗 Enlaces Útiles

- **AR.js Documentation:** https://ar-js-org.github.io/AR.js/
- **A-Frame Documentation:** https://aframe.io/docs/
- **Marker Generator:** https://ar-js-org.github.io/AR.js/marker-training/
- **Community Examples:** https://github.com/AR-js-org/AR.js/tree/master/aframe/examples

---

¡Suerte con el juego! 🎮✨

