# 📥 Cómo Obtener los Marcadores

## 🎯 Opción 1: Descargar Directamente (MÁS FÁCIL)

### Método A: Desde AR.js GitHub (Recomendado)

Abre estos enlaces en tu navegador y haz **Click Derecho → Guardar imagen como...**

#### 📍 Marcador 1: HIRO ✅ (Ya descargado)
```
https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png
```
**Ubicación en tu proyecto:** `markers/hiro.png` ✅

---

#### 📍 Marcador 2: KANJI
**Opción A - URL Principal:**
```
https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/kanji.png
```

**Opción B - URL Alternativa:**
```
https://github.com/AR-js-org/AR.js/blob/master/data/images/kanji.png?raw=true
```

**Opción C - Descargar desde repositorio:**
1. Ve a: https://github.com/AR-js-org/AR.js/tree/master/data/images
2. Click en `kanji.png`
3. Click en el botón "Download"

---

#### 📍 Marcador 3: LETTER A (Patrón de Letra A)
**Opción A - URL Principal:**
```
https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/letterA.png
```

**Opción B - URL Alternativa:**
```
https://github.com/AR-js-org/AR.js/blob/master/data/images/letterA.png?raw=true
```

**Opción C - Descargar desde repositorio:**
1. Ve a: https://github.com/AR-js-org/AR.js/tree/master/data/images
2. Click en `letterA.png`
3. Click en el botón "Download"

---

## 🖨️ Opción 2: Usar el Generador de Marcadores Online

Si los enlaces anteriores no funcionan, puedes generar los marcadores desde la herramienta oficial:

### AR.js Marker Generator:
```
https://ar-js-org.github.io/AR.js/marker-training/
```

**Pasos:**
1. Abre el generador
2. Selecciona o crea tu patrón
3. Descarga la imagen del marcador
4. Guárdala en la carpeta `markers/`

---

## 🎨 Opción 3: Crear Marcadores Personalizados

### A. Usando AR.js Marker Training
1. Ve a: https://ar-js-org.github.io/AR.js/marker-training/
2. Sube una imagen con buen contraste (debe ser cuadrada)
3. El sistema generará:
   - La imagen del marcador (para imprimir)
   - El archivo `.patt` (patrón para el código)
4. Descarga ambos archivos

### B. Requisitos para crear marcadores propios:
- ✅ Alto contraste (blanco y negro funciona mejor)
- ✅ Diseño no simétrico (mejor detección)
- ✅ Bordes claros y definidos
- ✅ Evitar patrones muy simples

---

## 📋 Guía Paso a Paso para Descargar

### Para usuarios de Mac:

```bash
# Opción con curl (desde terminal):
cd /Users/ncartalla/Documents/tecnologias/lab_ar/markers

# Marcador KANJI (intenta varias URLs)
curl -L -o kanji.png "https://github.com/AR-js-org/AR.js/blob/master/data/images/kanji.png?raw=true"

# Marcador Letter A
curl -L -o letterA.png "https://github.com/AR-js-org/AR.js/blob/master/data/images/letterA.png?raw=true"
```

### Para usuarios de Windows:

```powershell
# Desde PowerShell:
cd C:\ruta\a\tu\proyecto\lab_ar\markers

# Marcador KANJI
Invoke-WebRequest -Uri "https://github.com/AR-js-org/AR.js/blob/master/data/images/kanji.png?raw=true" -OutFile "kanji.png"

# Marcador Letter A
Invoke-WebRequest -Uri "https://github.com/AR-js-org/AR.js/blob/master/data/images/letterA.png?raw=true" -OutFile "letterA.png"
```

---

## 🔍 Verificar que los Marcadores se Descargaron Correctamente

### Desde Terminal (Mac/Linux):
```bash
cd /Users/ncartalla/Documents/tecnologias/lab_ar/markers
ls -lh *.png
```

**Deberías ver:**
- `hiro.png` → ~100-120 KB ✅
- `kanji.png` → ~100-120 KB
- `letterA.png` → ~100-120 KB

Si los archivos son muy pequeños (< 1 KB), significa que no se descargaron correctamente.

---

## 🖨️ Después de Descargar - Cómo Imprimir

Una vez que tengas los 3 archivos PNG en la carpeta `markers/`:

### 1. Abre cada imagen
```bash
open hiro.png
open kanji.png
open letterA.png
```

### 2. Imprime cada una con estas configuraciones:
- **Tamaño:** 10x10 cm (óptimo)
- **Calidad:** Alta / Best
- **Papel:** Blanco mate (no brilloso)
- **Color:** Blanco y negro está bien

### 3. Tips de Impresión:
- Si no tienes impresora, guarda los archivos en USB y ve a una copistería
- Pide impresión en alta calidad
- Imprime en papel de buen gramaje (80g o más)
- Opcional: lamina los marcadores para mayor durabilidad

---

## 📱 Opción 4: Usar Marcadores Digitales (Solo para Testing)

Si no puedes imprimir de inmediato, para hacer pruebas puedes:

1. Abrir las imágenes en otra pantalla (tablet, otro celular)
2. Apuntar la cámara del dispositivo con el juego a esa pantalla
3. **Nota:** Funciona pero la detección es menos estable que con papel

---

## 🆘 Solución de Problemas

### ❌ "No puedo descargar los archivos"
**Solución:**
1. Verifica tu conexión a internet
2. Intenta con las URLs alternativas
3. Descarga directamente desde GitHub navegando al repositorio
4. Usa el generador online de AR.js

### ❌ "Los archivos son muy pequeños (14 bytes)"
**Solución:**
- Esos son errores 404 de GitHub
- Usa las URLs con `?raw=true` al final
- O descarga manualmente desde el navegador

### ❌ "No sé si el marcador es correcto"
**Solución:**
- Los marcadores correctos tienen un borde negro grueso
- Dentro del borde hay un patrón único blanco y negro
- El archivo debe pesar entre 50-150 KB

---

## 📂 Estructura Final de tu Carpeta markers/

```
markers/
├── hiro.png              ← Marcador 1 (113 KB) ✅
├── kanji.png             ← Marcador 2 (~120 KB) ⚠️ Por descargar
├── letterA.png           ← Marcador 3 (~120 KB) ⚠️ Por descargar
├── INFO_MARCADORES.md    ← Info técnica
└── DESCARGAR_MARCADORES.md  ← Esta guía
```

---

## 🎯 Método Definitivo - Descarga Manual desde GitHub

### Paso a Paso Visual:

1. **Abre tu navegador** (Chrome, Safari, Firefox)

2. **Ve al repositorio de AR.js:**
   ```
   https://github.com/AR-js-org/AR.js/tree/master/data/images
   ```

3. **Para cada marcador:**
   - Click en el nombre del archivo (kanji.png o letterA.png)
   - En la página que se abre, busca el botón **"Download"** o **"Download raw file"**
   - Click en ese botón
   - El archivo se descargará a tu carpeta de Descargas
   
4. **Mueve los archivos:**
   - Abre Finder
   - Ve a tu carpeta Descargas
   - Arrastra `kanji.png` y `letterA.png` a:
     ```
     /Users/ncartalla/Documents/tecnologias/lab_ar/markers/
     ```

---

## ✅ Checklist Final

Antes de imprimir, verifica:
- [ ] Tienes los 3 archivos PNG en `markers/`
- [ ] Cada archivo pesa más de 50 KB
- [ ] Puedes abrir y ver cada imagen correctamente
- [ ] Las imágenes muestran un patrón blanco y negro con borde negro
- [ ] Los archivos se llaman exactamente: `hiro.png`, `kanji.png`, `letterA.png`

**¡Listo para imprimir!** 🖨️

---

## 💡 Nota Importante

**El juego NO necesita que los marcadores estén en la carpeta `markers/`** para funcionar. 

Los marcadores en esta carpeta son **solo para que TÚ los imprimas**. El juego carga los marcadores desde URLs online directamente.

La carpeta `markers/` es tu "banco de imágenes" para imprimir y distribuir físicamente en el edificio.

---

¿Problemas? Revisa `INFO_MARCADORES.md` para más detalles técnicos.

