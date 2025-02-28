import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Services from "./Services";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
