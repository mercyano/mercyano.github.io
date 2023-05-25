import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectsSection';

function App() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <div className="border-t-2 my-20"></div>
      <ProjectSection />
      <div className="border-t-2 my-20"></div>
      <ContactSection />
    </>
  );
}

export default App;
