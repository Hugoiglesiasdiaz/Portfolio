import PresentationSection from '../components/PresentationSection';
import StudiesSection from '../components/StudiesSection';
import ProjectsSection from '../components/ProjectsSection';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import SkillsSection from './../components/SkillsSection';
import ContactForm from '../components/ContactForm';

import myphoto from "../assets/myphoto.jpg";

function App() {
  return (
    <>
      <Navbar />

      <section id="presentation" >
        <PresentationSection
          name="Hugo Iglesias Díaz"
          photoUrl={myphoto}
          role="Desarrollador FullStack"
        />
      </section>

      <section id="studies">
        <StudiesSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />

    </>
  );
}

export default App;
