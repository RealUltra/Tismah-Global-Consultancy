import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import WhyUsSection from "./WhyUsSection";
import ReviewsSection from "./ReviewsSection";
import PricingCTA from "./PricingCTA";
import MainLayout from "./MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ReviewsSection />
      <PricingCTA />
    </MainLayout>
  );
};

export default HomePage;
