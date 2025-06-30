import React from "react";

type PresentationSectionProps = {
  name: string;
  role: string;
  photoUrl: string;
};

const PresentationSection: React.FC<PresentationSectionProps> = ({ name, role, photoUrl }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 px-6 py-20 bg-gray-900">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src={photoUrl}
          alt={`${name} profile`}
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-bold text-white">{name}</h1>
          <p className="mt-2 text-4xl text-gray-300">{role}</p>
        </div>
      </div>

      <div className="max-w-4xl text-center md:text-left">
        <h2 className="text-4xl font-bold text-white mb-6">
          Sobre mí
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Soy un desarrollador junior apasionado por continuar aprendiendo nuevas tecnologías a la
          par que continuar desarrollando aplicaciones de todo tipo.
          Me especializo en tecnologías como <strong>React</strong>,
          <strong> Java</strong>, <strong> SQL</strong>,
          <strong> Laravel</strong> y{" "}
          <strong> Tailwind CSS</strong>, también he practicado sobre aplicaciones móviles en Java
          como con <strong> Kotlin</strong> y <strong> Jetpack Compose</strong>.
          Actualmente estoy abierto a oportunidades para crecer profesionalmente
          y contribuir a proyectos innovadores.
        </p>
      </div>
    </section>
  );
};

export default PresentationSection;
