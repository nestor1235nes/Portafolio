# 🚀 Despliegue en Vercel

## Pasos para desplegar tu portafolio

### 1️⃣ Preparación
Tu proyecto ya está listo para Vercel con:
- ✅ `vercel.json` configurado
- ✅ Scripts de build en `package.json`
- ✅ Todas las imágenes en `/public`
- ✅ Configuración de Vite optimizada

### 2️⃣ Desplegar desde GitHub

#### Opción A: Despliegue automático (Recomendado)

1. **Sube tu código a GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Ve a Vercel:**
   - Accede a [vercel.com](https://vercel.com)
   - Haz clic en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Vite
   - Haz clic en "Deploy"

3. **¡Listo!** Tu portafolio estará disponible en una URL como:
   `https://tu-portafolio.vercel.app`

#### Opción B: Despliegue con Vercel CLI

1. **Instala Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Inicia sesión:**
   ```bash
   vercel login
   ```

3. **Despliega:**
   ```bash
   vercel
   ```

4. **Para producción:**
   ```bash
   vercel --prod
   ```

### 3️⃣ Configuración en Vercel (si es necesario)

Si Vercel no detecta automáticamente la configuración:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 4️⃣ Variables de entorno (si las necesitas en el futuro)

En el dashboard de Vercel:
- Settings → Environment Variables
- Agrega las variables que necesites

### 5️⃣ Dominio personalizado (opcional)

1. Ve a Settings → Domains
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones

---

## 🔄 Actualizaciones automáticas

Una vez conectado con GitHub:
- Cada `push` a `main` desplegará automáticamente
- Los Pull Requests generarán previews automáticas
- Rollback fácil desde el dashboard

## 📊 Monitoreo

Vercel te proporciona:
- Analytics de rendimiento
- Logs de despliegue
- Métricas de uso

---

## ✅ Checklist pre-despliegue

- [x] Código en GitHub
- [x] vercel.json configurado
- [x] Imágenes optimizadas en /public
- [x] Build funciona localmente (`npm run build`)
- [x] Preview funciona (`npm run preview`)

## 🆘 Solución de problemas

### Error de build
```bash
# Prueba el build localmente
npm run build
npm run preview
```

### Imágenes no cargan
- Verifica que estén en `/public`
- Usa rutas absolutas: `/imagen.jpg` no `./imagen.jpg`

### 404 en rutas
- El `vercel.json` ya incluye rewrites para SPA

---

¡Tu portafolio está listo para brillar en producción! 🌟
