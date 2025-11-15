# 🎯 Portafolio Personal - Néstor Ramírez

Portafolio profesional desarrollado con React y Vite, personalizado con información real.

## ✨ Características

- 🎨 Diseño moderno y profesional
- 🌊 Animaciones fluidas con react-tsparticles
- 📱 Totalmente responsive
- ⚡ Optimizado con Vite
- 🎭 Proyecto destacado: VitaLink con video promocional
- 📊 Secciones interactivas

## 🚀 Comenzar

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Producción

```bash
npm run build
npm run preview
```

## 📝 Contenido Personalizado

### ✅ Ya Personalizado

- ✅ Nombre: Néstor Ramírez
- ✅ Universidad: Universidad de Tarapacá
- ✅ Ubicación: Arica, Chile
- ✅ Proyecto destacado: VitaLink con video promocional
- ✅ Enlace a GitHub: https://github.com/nestor1235nes
- ✅ Demo VitaLink: https://agendavitalink.vercel.app/
- ✅ Habilidades técnicas actualizadas
- ✅ Experiencia y educación
- ✅ Información de contacto

### 🔧 Para Personalizar Aún Más

1. **Email de Contacto**
   - Edita `src/components/Contact.jsx`
   - Cambia `nestorramirez@ejemplo.com` por tu email real

2. **LinkedIn**
   - Edita `src/components/Contact.jsx`
   - Actualiza la URL de LinkedIn con tu perfil

3. **Más Proyectos**
   - Edita `src/components/Projects.jsx`
   - Agrega tus proyectos adicionales con sus respectivos enlaces

4. **Foto de Perfil**
   - Agrega tu imagen en `src/assets/`
   - Edita `src/components/About.jsx` para incluirla

## 🎥 Video Promocional

El video de VitaLink está en `public/VITALINK_promocional.mp4` y se muestra al hacer clic en el botón de play del proyecto destacado.

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx          # Navegación (Logo: NR)
│   ├── Hero.jsx            # Sección principal con botón GitHub
│   ├── About.jsx           # Sobre mí
│   ├── Skills.jsx          # Habilidades
│   ├── Projects.jsx        # Proyectos (VitaLink destacado)
│   ├── Experience.jsx      # Experiencia y educación
│   ├── Contact.jsx         # Contacto con enlaces
│   ├── VideoModal.jsx      # Modal para video de VitaLink
│   └── CustomizationGuide.jsx  # Guía de personalización
├── App.jsx                 # Componente principal
├── main.jsx               # Punto de entrada
└── styles.css             # Estilos globales
```

## 🎨 Tecnologías

- React 19
- Vite
- React TSParticles
- CSS Modules

## 🚀 Despliegue Recomendado

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta dist a Netlify
```

## 🔗 Enlaces Importantes

- **GitHub**: https://github.com/nestor1235nes
- **VitaLink Demo**: https://agendavitalink.vercel.app/
- **Video Promocional**: Incluido en `public/VITALINK_promocional.mp4`

---

Desarrollado por Néstor Ramírez con ❤️ y React


## ✨ Características

- 🎨 Diseño moderno y profesional
- 🌊 Animaciones fluidas con react-tsparticles
- 📱 Totalmente responsive
- ⚡ Optimizado con Vite
- 🎭 Temas con gradientes atractivos
- 📊 Secciones interactivas

## 🚀 Comenzar

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Producción

```bash
npm run build
npm run preview
```

## 📝 Personalización

### 1. Información Personal

Edita `src/components/Hero.jsx`:
- Cambia "Tu Nombre" por tu nombre completo
- Personaliza el título y descripción

Edita `src/components/About.jsx`:
- Actualiza tu descripción personal
- Modifica los highlights según tu perfil

### 2. Habilidades

Edita `src/components/Skills.jsx`:
- Actualiza las tecnologías y porcentajes según tu experiencia
- Agrega o elimina categorías de habilidades

### 3. Proyectos

Edita `src/components/Projects.jsx`:
- Reemplaza los proyectos de ejemplo con tus proyectos reales
- Actualiza los enlaces de GitHub y demos
- Cambia las descripciones y tecnologías

### 4. Experiencia

Edita `src/components/Experience.jsx`:
- Actualiza tu educación (universidad, promedio, proyecto de título)
- Agrega tu experiencia laboral real
- Modifica fechas y descripciones

### 5. Contacto

Edita `src/components/Contact.jsx`:
- Actualiza tus redes sociales (GitHub, LinkedIn, Email)
- Cambia la ubicación
- Opcionalmente integra un servicio de email (EmailJS, Formspree)

### 6. Meta Tags y Título

Edita `index.html`:
- Actualiza el título de la página
- Modifica las meta etiquetas con tu información

### 7. Colores y Estilos

Edita `src/styles.css` para cambiar los colores:
```css
:root {
  --bg-primary: #0f172a;        /* Fondo principal */
  --bg-secondary: #1e293b;      /* Fondo secundario */
  --text-primary: #f1f5f9;      /* Texto principal */
  --text-secondary: #cbd5e1;    /* Texto secundario */
  --accent-color: #60a5fa;      /* Color de acento */
  --accent-secondary: #a78bfa;  /* Color de acento secundario */
}
```

### 8. Imagen de Perfil (Opcional)

Para agregar tu foto en la sección "Sobre Mí":
1. Agrega tu imagen en `src/assets/`
2. Edita `src/components/About.jsx`:
```jsx
import profileImg from '../assets/tu-foto.jpg';

// Reemplaza el placeholder con:
<div className="about-image">
  <img src={profileImg} alt="Tu Nombre" />
</div>
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx          # Navegación
│   ├── Hero.jsx            # Sección principal
│   ├── About.jsx           # Sobre mí
│   ├── Skills.jsx          # Habilidades
│   ├── Projects.jsx        # Proyectos
│   ├── Experience.jsx      # Experiencia y educación
│   └── Contact.jsx         # Contacto
├── App.jsx                 # Componente principal
├── main.jsx               # Punto de entrada
└── styles.css             # Estilos globales
```

## 🎨 Tecnologías

- React 19
- Vite
- React TSParticles
- CSS Modules

## 🚀 Despliegue

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta dist a Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Agrega en `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Actualiza `vite.config.js`:
```js
export default defineConfig({
  base: '/nombre-repositorio/',
  plugins: [react()]
})
```

Ejecuta:
```bash
npm run deploy
```

## 📞 Soporte

¿Problemas o preguntas? Revisa la documentación de [Vite](https://vitejs.dev/) y [React](https://react.dev/).

---

Hecho con ❤️ y React
