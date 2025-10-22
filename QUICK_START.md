# ⚡ Quick Start - Inicio Rápido

## Para el Equipo de Desarrollo

Esta guía te ayudará a poner en marcha el proyecto en **menos de 5 minutos**.

---

## 🎯 Opción 1: Deploy Inmediato (RECOMENDADO)

### GitHub Pages - 3 minutos

```bash
# 1. Inicializa Git
git init

# 2. Agrega todos los archivos
git add .

# 3. Haz el commit inicial
git commit -m "Initial commit: AR Treasure Hunt"

# 4. Crea un repo en GitHub llamado 'lab_ar'
# Ve a: https://github.com/new

# 5. Conecta tu repo local (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/lab_ar.git
git branch -M main
git push -u origin main

# 6. Activa GitHub Pages
# Ve a: Settings → Pages → Source: main → Save
```

**Tu juego estará en:** `https://TU_USUARIO.github.io/lab_ar/`

---

## 🖨️ Opción 2: Imprime los Marcadores

### Descarga e imprime estos 3 marcadores:

1. **[Marcador HIRO](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png)** (Click derecho → Guardar)
2. **[Marcador KANJI](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/kanji.png)** (Click derecho → Guardar)
3. **[Marcador LETTER A](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/letterA.png)** (Click derecho → Guardar)

**Tips:**
- Imprime en **alta calidad**
- Usa papel **blanco mate**
- Tamaño: **10x10 cm** cada uno

---

## 📱 Opción 3: Prueba Local

### Con Python (más fácil):

```bash
# Python 3
cd /Users/ncartalla/Documents/tecnologias/lab_ar
python3 -m http.server 8000

# Abre en tu navegador:
# http://localhost:8000/test-local.html
```

### Con Node.js:

```bash
# Instala http-server globalmente
npm install -g http-server

# Ejecuta el servidor
cd /Users/ncartalla/Documents/tecnologias/lab_ar
http-server -p 8000

# Abre: http://localhost:8000/test-local.html
```

### Con VS Code:

1. Instala la extensión **"Live Server"**
2. Click derecho en `test-local.html`
3. Selecciona "Open with Live Server"

⚠️ **Nota:** Algunos navegadores requieren HTTPS para acceder a la cámara. Para testing local, usa el método de deploy (GitHub Pages, etc.)

---

## 📋 Checklist Completo

### Antes de compartir con los Beta Testers:

- [ ] Código desplegado en URL pública
- [ ] URL probada en al menos 1 dispositivo móvil
- [ ] Los 3 marcadores están impresos
- [ ] Marcadores colocados en ubicaciones estratégicas
- [ ] Cámara funciona correctamente en la URL
- [ ] Los 3 marcadores se detectan bien
- [ ] El progreso se actualiza correctamente
- [ ] La pantalla de victoria aparece al completar
- [ ] Instrucciones claras en la interfaz

---

## 📤 Compartir con Beta Testers

### Envía a Bruno, Maxi y Gonzalo:

**Mensaje sugerido:**

```
¡Hola! 👋

Les comparto el juego de AR de Búsqueda del Tesoro del Sacré Coeur:

🎮 URL del juego: [TU_URL_AQUÍ]

📍 Para jugar necesitan:
1. Encontrar 3 marcadores en el edificio
2. Escanearlos con su celular
3. Seguir las pistas hasta encontrar el tesoro

📖 Guía completa: [URL]/COMO_USAR.md

🖨️ Si necesitan imprimir los marcadores:
- Marcador 1: https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png
- Marcador 2: https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/kanji.png
- Marcador 3: https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/letterA.png

¡Tienen [X] semanas para completarlo!

¿Dudas? Contacten por [email/whatsapp]

¡Suerte! 🏆✨
```

---

## 🗂️ Archivos del Proyecto

```
📁 lab_ar/
│
├── 🎮 index.html                    # Juego principal (ARCHIVO PRINCIPAL)
├── 🎨 styles.css                    # Estilos UI
├── 🧠 game.js                       # Lógica del juego
│
├── 📖 README.md                     # Documentación completa
├── 👥 COMO_USAR.md                  # Para beta testers
├── 🚀 INSTRUCCIONES_DEPLOYMENT.md   # Guía de deployment
├── ⚡ QUICK_START.md                # Esta guía
├── 🧪 test-local.html               # Página de test
│
├── 📁 markers/
│   └── 📍 INFO_MARCADORES.md        # Info sobre marcadores
│
└── ⚙️ .gitignore                    # Config Git
```

---

## 🎯 Flujo de Trabajo Completo

```
1. Desarrollar
   ↓
2. Probar localmente (opcional)
   ↓
3. Deploy a GitHub Pages/Azure/Netlify
   ↓
4. Imprimir y colocar marcadores
   ↓
5. Probar el juego completo
   ↓
6. Compartir con beta testers
   ↓
7. Recopilar feedback
   ↓
8. Iterar y mejorar
```

---

## 🛠️ Comandos Útiles

### Ver el estado de Git:
```bash
git status
```

### Ver el historial:
```bash
git log --oneline
```

### Hacer cambios y subirlos:
```bash
git add .
git commit -m "Descripción del cambio"
git push
```

### Ver la URL de tu repositorio:
```bash
git remote -v
```

---

## 🐛 Solución Rápida de Problemas

| Problema | Solución |
|----------|----------|
| La cámara no funciona | Usa HTTPS (deploy en GitHub Pages, etc.) |
| Marcadores no se detectan | Mejora iluminación, imprime en mejor calidad |
| Juego no carga | Verifica consola del navegador (F12) |
| Git push falla | Verifica credenciales y URL del repo |
| No se ve en GitHub Pages | Espera 1-2 minutos, verifica Settings → Pages |

---

## 📞 Contactos Útiles

- **Documentación AR.js:** https://ar-js-org.github.io/AR.js/
- **Documentación A-Frame:** https://aframe.io/docs/
- **GitHub Pages Docs:** https://pages.github.com/
- **Stack Overflow:** #ar.js #aframe

---

## 💡 Tips Pro

1. **QR Code:** Genera un QR de tu URL con [qr-code-generator.com](https://www.qr-code-generator.com/)
2. **Analytics:** Agrega Google Analytics para ver cuántos juegan
3. **Custom Domain:** Configura un dominio personalizado en GitHub Pages
4. **Backup:** Siempre mantén el código en GitHub
5. **Testing:** Prueba en diferentes dispositivos antes del launch

---

## 🎉 ¡Todo Listo!

Si seguiste estos pasos, tu juego AR ya debería estar:

✅ Desplegado en una URL pública  
✅ Con los marcadores listos  
✅ Funcionando correctamente  
✅ Listo para compartir con los beta testers  

---

## 📈 Próximos Pasos (Post-Launch)

1. Monitorear el feedback de los beta testers
2. Corregir bugs reportados
3. Mejorar la experiencia basándose en comentarios
4. Agregar features opcionales (sonidos, animaciones extra)
5. Documentar lecciones aprendidas

---

## 🏆 Objetivo Final

> **Bruno, Maxi y Gonzalo deben poder encontrar el tesoro sin ayuda adicional**

Si pueden completar el juego exitosamente, ¡misión cumplida! 🎉

---

**¿Listo para comenzar?** Ejecuta los comandos de Git y ¡manos a la obra! 💪

**Última actualización:** Octubre 2025  
**Versión:** 1.0

