import PresentationSection from '../components/PresentationSection';
import AboutMeSection from '../components/AboutMeSection';
import StudiesSection from '../components/StudiesSection';
import ProjectsSection from '../components/ProjectsSection';
import Navbar from '../components/NavBar';

function App() {
  return (
    <>
      <Navbar />

      <section id="presentation" >
        <PresentationSection
          name="Hugo Iglesias Díaz"
          photoUrl="/images/myphoto.jpg"
          role="Desarrollador FullStack"
        />
      </section>

      <section id="about">
        <AboutMeSection />
      </section>

      <section id="studies">
        <StudiesSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>
    </>
  );
}

export default App;
