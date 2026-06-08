import Nav from './components/Nav.jsx';
import Hero from './sections/Hero.jsx';
import WhatWeDo from './sections/WhatWeDo.jsx';
import HowWeWork from './sections/HowWeWork.jsx';
import Domains from './sections/Domains.jsx';
import AI from './sections/AI.jsx';
import Tech from './sections/Tech.jsx';
import WhyUs from './sections/WhyUs.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#top">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <HowWeWork />
        <Domains />
        <AI />
        <Tech />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
