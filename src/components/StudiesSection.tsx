const StudiesSection: React.FC = () => {
  interface Study {
    title: string;
    location: string;
    year?: string;
    url?: string;
  }

  const studies: Study[] = [
    { title: "Grado en Ingeniería Informática", location: "UNED", year: "2024 - Actualidad" },
    { title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma", location: "IES Chan do Monte", year: "2022-2024" },
    {
      title: "JavaScript TOTAL - De Cero a Programador Web en 18 Días",
      location: "Plataforma UDEMY",
      year: "2024",
      url: "https://www.udemy.com/certificate/UC-c8a02630-751c-4c57-801f-a532c78db203/"
    },
    {
      title: "Dominando Laravel - De principiante a experto",
      location: "Plataforma UDEMY",
      year: "2024",
      url: "https://www.udemy.com/certificate/UC-904a374f-2e3f-42cd-902f-73c590a347bb/"
    },
  ];

  return (
    <section className="px-6 py-16 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Formación y Estudios
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {studies.map((study, index) => (
          <article
            key={`${study.title}-${index}`}
            className="p-4 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-800 shadow rounded"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {study.url ? (
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600 dark:text-blue-400"
                >
                  {study.title}
                </a>
              ) : (
                study.title
              )}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{study.location}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{study.year}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StudiesSection;
