import React from "react";
import NavBar from "./InstitucionalPage/NavBar";
import Home from "./InstitucionalPage/Home";
import AboutUs from "./InstitucionalPage/AboutUs";
import Team from "./InstitucionalPage/Team";
import Services from "./InstitucionalPage/Services";
import Contact from "./InstitucionalPage/Contact";
import Footer from "./InstitucionalPage/Footer";

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
