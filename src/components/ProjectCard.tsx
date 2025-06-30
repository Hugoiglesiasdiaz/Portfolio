import React from "react";

interface ProjectCardProps {
  title: string;
  description?: string;
  tech?: string[];
  image?: string;
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description = "",
  tech = [],
  image,
  github,
  demo,
}) => {
  return (
    <section className="px-6 py-12 bg-gray-900">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-1">
        {image && (
          <img
            src={image}
            alt={title || "Project image"}
            className="w-full h-56 object-cover"
          />
        )}
        <div className="p-8">
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {tech.map((t, index) => (
              <span
                key={index}
                className="bg-gray-700 text-sm px-4 py-1 rounded-full text-white"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-6">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold hover:underline"
              >
                Demo
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 font-semibold hover:underline"
              >
                Código
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
