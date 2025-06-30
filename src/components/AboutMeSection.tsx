import React from "react";

const AboutMeSection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center md:text-left">
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

export default AboutMeSection;
