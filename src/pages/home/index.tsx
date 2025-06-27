import AboutSection from './components/about-section';
import Hero from './components/hero-section';
import VisualOfProgram from './components/visual-section';

const Home = () => {
  return (
    <main className="fixed-width">
      <Hero />
      <AboutSection />
      <VisualOfProgram />
    </main>
  );
};

export default Home;
