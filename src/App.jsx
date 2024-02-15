import React,{Suspense} from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  const Contact = React.lazy(() => import('./components/contact/Contact'));
  const Hero = React.lazy(() => import('./components/hero/Hero'));
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Suspense fallback='saadtest1'>
          <Hero />
          </Suspense>
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
       <Suspense fallback='saadtest'> <Contact /></Suspense>
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
