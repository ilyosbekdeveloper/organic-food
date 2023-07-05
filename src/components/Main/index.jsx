import React from "react";
import "./index.scss";
import Header from "../Header/Header.jsx";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import ServicesSection from "../ServicesSection/ServicesSection.jsx";
import Menu from "../Menu/Menu.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";

const MainSection = () => {
  return (
    <div>
      <Header />
      <Home />
      {/* about section */}
      <About />
      {/* sercvices section */}
      <ServicesSection />
      {/* menu */}
      <Menu />
      {/* contact section */}
      <Contact />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainSection;
