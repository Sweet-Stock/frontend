import React from "react";
import NavBar from "./nav_bar/NavBar";
import Home from "./home/Home";
import AboutUs from "./about_us/AboutUs";
import Team from "./team/Team";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

export default () => {
  
  return (
    <>
      <NavBar />
      <Home />
      <AboutUs />
      <Team />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};
