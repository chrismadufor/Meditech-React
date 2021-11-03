import ".././landing-page.css";

import React from "react";
import Nav from "../components/landing page/layout/Nav";
import Hero from "../components/landing page/layout/Hero";
import Quality from "../components/landing page/layout/Quality";
import Footer from "../components/landing page/layout/Footer";


const LandingPage = () => {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Quality />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
