# 🚀 Guía Rápida de Deployment

## Para publicar tu juego AR en menos de 5 minutos

---

## ✨ Opción Más Fácil: GitHub Pages (RECOMENDADO)

### Paso 1: Subir el código a GitHub

```bash
# Inicializa el repositorio
git init

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "Juego AR de Búsqueda del Tesoro - Sacré Coeur"

# Crea el repositorio en GitHub (hazlo desde github.com primero)
# Luego conecta tu repo local:
git remote add origin https://github.com/TU_USUARIO/lab_ar.git

# Sube el código
git branch -M main
git push -u origin main
```

### Paso 2: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click en **Save**
6. ¡Listo! En 1-2 minutos tu sitio estará en:
   ```
   https://TU_USUARIO.github.io/lab_ar/
   ```

---

## 🔵 Opción 2: Azure Static Web Apps

### Prerrequisitos
- Cuenta de Azure (hay cuenta gratis para estudiantes)
- Código en GitHub

### Pasos

1. **Desde Azure Portal** (portal.azure.com):
   - Click en "Create a resource"
   - Busca "Static Web App"
   - Click en "Create"

2. **Configuración básica**:
   - Subscription: Tu suscripción
   - Resource Group: Crea uno nuevo o usa existente
   - Name: `lab-ar-sacre-coeur`
   - Region: `East US 2` o la más cercana

3. **Deployment details**:
   - Source: `GitHub`
   - Autoriza Azure a acceder a tu GitHub
   - Organization: Tu usuario
   - Repository: `lab_ar`
   - Branch: `main`

4. **Build Details**:
   - Build Presets: `Custom`
   - App location: `/`
   - Api location: *(dejar vacío)*
   - Output location: `/`

5. Click en **Review + create** → **Create**

6. ¡Listo! Azure te dará una URL como:
   ```
   https://gentle-sea-012345678.azurestaticapps.net
   ```

---

## 🟢 Opción 3: Netlify (Súper Fácil)

### Método Drag & Drop

1. Ve a [netlify.com](https://www.netlify.com/)
2. Regístrate o inicia sesión
3. Arrastra toda la carpeta `lab_ar` a la zona de "Drag and drop"
4. ¡Listo! Netlify te da una URL instantánea

### Método desde Git

1. Sube tu código a GitHub (ver Opción 1, Paso 1)
2. En Netlify, click en "Add new site" → "Import an existing project"
3. Conecta con GitHub
4. Selecciona tu repositorio
5. Build settings:
   - Base directory: *(vacío)*
   - Build command: *(vacío)*
   - Publish directory: `/`
6. Click en "Deploy site"

---

## 🟣 Opción 4: Vercel

```bash
# Instala Vercel CLI
npm install -g vercel

# Desde la carpeta del proyecto
vercel

# Sigue las instrucciones interactivas
# Al final te da una URL como: https://lab-ar.vercel.app
```

---

## 🔴 Opción 5: Firebase Hosting

```bash
# Instala Firebase CLI
npm install -g firebase-tools

# Inicia sesión
firebase login

# Inicializa el proyecto
firebase init hosting

# Configuración:
# - Public directory: .
# - Configure as single-page app: No
# - Set up automatic builds: No

# Despliega
firebase deploy
```

---

## 📱 Compartir con los Beta Testers

Una vez que tengas tu URL, envíasela a Bruno, Maxi y Gonzalo junto con:

1. **La URL del juego**
2. **Los marcadores para imprimir** (están en el README)
3. **Instrucciones rápidas:**
   ```
   1. Imprime los 3 marcadores (links en el README)
   2. Abre la URL en tu celular
   3. Permite acceso a la cámara
   4. Apunta a cada marcador para encontrar pistas
   5. ¡Encuentra el tesoro!
   ```

---

## ✅ Checklist Pre-Launch

Antes de enviar la URL a los beta testers, verifica:

- [ ] El juego carga correctamente
- [ ] La cámara funciona en tu dispositivo
- [ ] Los 3 marcadores se detectan bien
- [ ] El progreso se actualiza correctamente
- [ ] La pantalla de victoria aparece al final
- [ ] Los sonidos funcionan (opcional, algunos browsers bloquean audio)
- [ ] Probaste en al menos 2 dispositivos diferentes
- [ ] La URL es fácil de compartir y recordar

---

## 🆘 Solución de Problemas Comunes

### "La cámara no funciona"
- Asegúrate de estar usando **HTTPS** (GitHub Pages, Azure, Netlify, etc. lo usan por defecto)
- HTTP normal NO funciona con acceso a cámara

### "Los marcadores no se detectan"
- Imprime los marcadores en buena calidad
- Buena iluminación es clave
- Mantén distancia de 20-50cm

### "El juego no carga"
- Verifica que index.html esté en la raíz del proyecto
- Chequea la consola del navegador (F12) para errores
- Asegúrate de que todos los archivos se subieron correctamente

---

## 💡 Tips Pro

1. **Custom Domain**: GitHub Pages y Netlify te permiten usar tu propio dominio
2. **Analytics**: Agrega Google Analytics para ver cuántos juegan
3. **QR Code**: Genera un código QR de tu URL para compartir fácilmente
4. **Backup**: Siempre ten el código en GitHub, aunque uses otro hosting

---

## 🎯 URL Recomendadas

- GitHub Pages: `https://tu-usuario.github.io/lab_ar/`
- Netlify: `https://lab-ar-sacre-coeur.netlify.app`
- Vercel: `https://lab-ar.vercel.app`
- Azure: `https://lab-ar-sacre-coeur.azurestaticapps.net`

¡Elige la que más te guste y a jugar! 🎮✨

