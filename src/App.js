
import './App.css';
import About from './components/About';
import Features from './components/Features';
import Header from './components/Header'
import Hero from './components/Hero';
import Ctasection from './components/Ctasection';
import Services from './components/Services';
import Potfolio from './components/Potfolio';
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

      <Hero />
      <About />
      <Services />
      <Potfolio />
      <Pricing />
      <Faq />
      <Team />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
