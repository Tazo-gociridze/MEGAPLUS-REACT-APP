import AboutSection from './components/about-section';
import Hero from './components/hero-section';
import Tariffs from './components/tariffs-section';
import VisualOfProgram from './components/visual-section';

const Home = () => {
  return (
    <main className="fixed-width !mb-[100px]">
      <Hero />
      <AboutSection />
      <VisualOfProgram />
      <Tariffs/>
    </main>
  );
};

export default Home;
