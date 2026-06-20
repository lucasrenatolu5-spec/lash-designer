import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SocialProof from './components/SocialProof/SocialProof';
import About from './components/About/About';
import Services from './components/Services/Services';
import Maintenance from './components/Maintenance/Maintenance';
import Benefits from './components/Benefits/Benefits';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Services />
        <Maintenance />
        <Benefits />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
