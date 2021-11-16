import "../components/styles/landing-page.css";
import React from "react";
import Nav from "../components/landing page/layout/Navigation";
import Hero from "../components/landing page/layout/Hero";
import Quality from "../components/landing page/layout/Quality";
import Footer from "../components/landing page/layout/Footer";
import Navigation from "../components/landing page/layout/Navigation";


const LandingPage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <Quality />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
