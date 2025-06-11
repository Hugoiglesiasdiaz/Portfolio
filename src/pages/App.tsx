import PresentationSection from '../components/PresentationSection';
import AboutMeSection from '../components/AboutMeSection';
import StudiesSection from '../components/StudiesSection';
import ProjectsSection from '../components/ProjectsSection';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import SkillsSection from './../components/SkillsSection';

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

      <section id="skills">
        <SkillsSection/>
      </section>

      <Footer />

    </>
  );
}

export default App;
