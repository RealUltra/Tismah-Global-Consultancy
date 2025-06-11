import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ReviewsSection from "./ReviewsSection";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ReviewsSection />
    </>
  );
};

export default HomePage;
