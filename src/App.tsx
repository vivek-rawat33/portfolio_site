import { ThemeProvider } from './context/ThemeContext';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-surface text-main selection:bg-accent-primary/25 selection:text-accent-primary">
        
        {/* Interactive Canvas Background Particles */}
        <BackgroundParticles />

        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </ThemeProvider>
  );
}

export default App;
