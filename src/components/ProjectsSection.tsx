import React from "react";
import ProjectCard from "./ProjectCard";

import lookFinderImg from "../assets/projects/LookFinder.jpg";
import proyectoLaravelImg from "../assets/projects/ProyectoLaravel.jpg";
import epedImg from "../assets/projects/EPED.jpg";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
}

const projects: Project[] = [
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
