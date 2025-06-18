import React from "react";
import MainLayout from "../MainLayout";
import Header from "./Header";
import QuestionsSection from "./QuestionsSection";
import PricingCTA from "../PricingCTA";

const FAQPage = () => {
  return (
    <MainLayout>
      <Header />
      <QuestionsSection />
      <PricingCTA />
    </MainLayout>
  );
};

export default FAQPage;
