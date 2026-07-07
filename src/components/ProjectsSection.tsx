import React from "react";
import ProjectCard from "./ProjectCard";

import lookFinderImg from "../assets/projects/LookFinder.jpg";
import proyectoLaravelImg from "../assets/projects/ProyectoLaravel.jpg";
import epedImg from "../assets/projects/EPED.jpg";
import grimoireImg from "../assets/projects/Grimoire.png";
import mobileReactImg from "../assets/projects/MobileReact.jpg";
import mauiTime from "../assets/projects/mauiTime.jpg";
import rutvi from "../assets/projects/Rutvi.jpg";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
  devpost?: string;
}

const projects: Project[] = [
  {
    title: "MauiTime",
    description: `Aplicación de productividad centrada en la experiencia de usuario que rompe con el 
    software tradicional. Presenta un HUD inspirado en la estética fanzine de Persona 5, 
    utilizando animaciones de alta velocidad basadas en hardware (GPU) y sistemas de control de 
    renderizado efímeros mediante tokens para blindar la interfaz.`,
    tech: [".NET MAUI", "C#", "XAML", "WinUI 3"],
    image: mauiTime, // Recuerda importar esta imagen en tu archivo del portfolio
    github: "https://github.com/Hugoiglesiasdiaz/MauiTime", 
  },
  {
    title: "Rutvi",
    description: `Progressive Web App (PWA) de alto rendimiento orientada a la gestión y visualización 
    dinámica de transporte en tiempo real. Integra cálculos geográficos con la fórmula Haversine y 
    procesamiento estático de datos GTFS nativos para mitigar la inestabilidad de las API de información 
    pública de terceros.`,
    tech: ["React 19", "TypeScript", "Tailwind CSS v4", "Leaflet"],
    image: rutvi, // Recuerda importar esta imagen en tu archivo del portfolio
    github: "https://github.com/Hugoiglesiasdiaz/Rutvi", 
  },
  {
    title: "Mobile Shop",
    description: `Proyecto desarrollado como prueba técnica de alto nivel para demostrar habilidades avanzadas en el ecosistema
    React. Esta aplicación de gestión web permite la administración dinámica de un catálogo de productos, 
    integrando un carrito de compras interactivo, filtrado avanzado y persistencia de datos. 
    Incluye un entorno de desarrollo profesional con tests unitarios automatizados, 
    un pipeline de CI/CD para asegurar la calidad del código y despliegue continuo en Vercel.`,
    tech: ["React 19", "Vite", "Tailwind CSS", "Vitest", "GitHub Actions", "Vercel"],
    image: mobileReactImg,
    github: "https://github.com/Hugoiglesiasdiaz/Gestion-web-React",
    demo: "https://gestion-web-react.vercel.app",
  },
  {
    title: "Grimoire",
    description: `Proyecto ganador en el HackUDC 2026 para el reto de Merlin Software. 
    Grimoire es una aplicación web de gestión de archivos de todo tipo,pdf,imagenes,csv,etc. Incluye funcionalidades como un
    buscador semántico, un sistema de etiquetas, un sistema de permisos e incluso un chatbot con el que poder resumir documentos o pedir ayuda
    para buscar información`,
    tech: ["HTML", "Python", "Elastic-search", "Flask", "sentence-transformers"],
    image: grimoireImg,
    github: "https://github.com/Yupikaiyi/Grimoirev2",
    devpost: "https://devpost.com/software/grimorie",
  },
  {
    title: "Look Finder",
    description: `Aplicación móvil presentada para el evento HACKUDC 2025. Esta aplicación permite sacar una foto 
      al outfit de una persona y de esta forma, usando una API de Inditex, 
      nos mostrará el enlace de las prendas usadas en la foto para poder encargarlas directamente 
      desde la tienda.`,
    tech: ["Kotlin", "Jetpack Compose"],
    image: lookFinderImg,
    github: "https://github.com/JuanVillaverdeRodriguez/LookFinder",
  },
  {
    title: "Web con Laravel",
    description: `Desarrollado como parte de un curso de Laravel. Tiene panel de administración, 
        base de datos y un login para autentificación.`,
    tech: ["Laravel", "MySQL", "Blade", "Eloquent"],
    image: proyectoLaravelImg,
    github: "https://github.com/Hugoiglesiasdiaz/PruebaLaravel",
  },
  {
    title: "Prácticas Universidad",
    description: `También se incluyen varias prácticas de la universidad como por ejemplo esta práctica 
        sobre estructuras de datos avanzadas y optimización así como tests de rendimiento.`,
    tech: ["Java"],
    image: epedImg,
    github: "https://github.com/Hugoiglesiasdiaz/Practica-UNED-EPED",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
