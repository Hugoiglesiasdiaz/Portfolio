import React from "react";

type PresentationSectionProps = {
  name: string;
  role: string;
  photoUrl: string;
};

const PresentationSection: React.FC<PresentationSectionProps> = ({ name, role, photoUrl }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-20 bg-white dark:bg-gray-900">
      <img
        src={photoUrl}
        alt={`${name} profile`}
        className="w-40 h-40 rounded-full object-cover shadow-lg"
      />
      <div className="text-center md:text-left">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white">{name}</h1>
        <p className="mt-2 text-4xl text-gray-600 dark:text-gray-300">{role}</p>
      </div>
    </section>
  );
};

export default PresentationSection;
