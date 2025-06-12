import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import WhyUsSection from "./WhyUsSection";
import ReviewsSection from "./ReviewsSection";
import PricingCTA from "./PricingCTA";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ReviewsSection />
      <PricingCTA />
      <Footer />
    </>
  );
};

export default HomePage;
