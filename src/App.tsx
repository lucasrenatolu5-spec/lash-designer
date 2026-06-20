import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SocialProof from './components/SocialProof/SocialProof';
import About from './components/About/About';
import Services from './components/Services/Services';
import PriceTable from './components/PriceTable/PriceTable';
import Maintenance from './components/Maintenance/Maintenance';
import Benefits from './components/Benefits/Benefits';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import Testimonials from './components/Testimonials/Testimonials';
import Studio from './components/Studio/Studio';
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
        <PriceTable />
        <Maintenance />
        <Benefits />
        <BeforeAfter />
        <Testimonials />
        <Studio />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
