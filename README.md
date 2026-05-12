# 🚀 Mi Portfolio Personal - Hugo Iglesias

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
</div>

---

## ✨ Sobre el Proyecto

Este es mi portfolio profesional, construido como una **Single Page Application (SPA)** de alto rendimiento. El proyecto no solo muestra mis trabajos, sino que integra herramientas reales de comunicación y animaciones avanzadas para ofrecer una experiencia de usuario de nivel premium.

🌐 **Demo en vivo:** [Visitar mi Portfolio](https://hugoiglesiasdiaz.es)

---

## 🛠️ Stack Tecnológico Detallado

He seleccionado cuidadosamente estas herramientas para garantizar escalabilidad y diseño:

* **Frontend:** React.js con **Vite** para una experiencia de desarrollo y carga ultrarrápida.
* **Estilos:** **Tailwind CSS** para una interfaz moderna y totalmente responsiva.
* **Animaciones:** **Framer Motion** para dotar de vida a la interfaz con transiciones suaves.
* **Componentes Visuales:** * `react-vertical-timeline-component` para mostrar mi trayectoria de forma interactiva.
    * `Lucide React` para una iconografía limpia y profesional.
* **Comunicación:** Integración con **EmailJS** para permitir el envío de correos directamente desde el formulario de contacto sin necesidad de un backend propio.

---

## 🚀 Funcionalidades Clave

* **Línea de Tiempo Interactiva:** Visualización clara de mi formación y experiencia laboral.
* **Formulario de Contacto Real:** Sistema funcional para recibir mensajes directamente a mi bandeja de entrada.
* **Galería de Proyectos:** Exposición detallada de mis desarrollos con enlaces directos a código y demos.
* **Optimización SEO & UX:** Uso de semántica HTML5, diseño Mobile-First y navegación fluida con `react-router-dom`.

---

## 💻 Instalación Local

```bash
# 1. Clonar el repositorio
git clone [https://github.com/Hugoiglesiasdiaz/Portfolio.git](https://github.com/Hugoiglesiasdiaz/Portfolio.git)

# 2. Entrar al proyecto
cd Portfolio

# 3. Instalar dependencias
npm install

# 4. Lanzar en modo desarrollo
npm run dev

## 📂 Estructura del Código

He organizado el proyecto siguiendo principios de modularidad para facilitar su mantenimiento:

```text
src/
 ├── assets/        # Imágenes, iconos y recursos multimedia
 ├── components/    # Componentes de la interfaz (Navbar, Hero, Experience...)
 ├── constants/     # Datos estáticos (Textos de proyectos, redes sociales)
 ├── hoc/           # Higher-Order Components para gestión de secciones
 ├── styles/        # Estilos globales y configuraciones de Tailwind
 ├── App.jsx        # Componente principal y envoltorio de secciones
 └── main.jsx       # Punto de entrada del proyecto
