import React,{Suspense} from "react";
import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Skills from "./components/Skills/Skills";

const App = () => {
  const Contact = React.lazy(() => import('./components/contact/Contact'));
  const Hero = React.lazy(() => import('./components/hero/Hero'));
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Suspense fallback='hero'>
          <Hero />
          </Suspense>
      </section>
      <section >
        <Parallax type="services" />
      </section>
      <section>
        <Services id="Services"/>
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>
        <div style={{ height: '600px', position: 'relative' }}>
  <Skills bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
      </section>
      <Portfolio id="projects"/>
      <section id="Contact Us">
       <Suspense fallback='saadtest'> <Contact /></Suspense>
      </section>
    </div>
  );
};

export default App;
