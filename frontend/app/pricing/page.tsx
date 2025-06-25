"use client";

import React, { useState } from "react";
import MainLayout from "../MainLayout";
import Header from "./Header";
import ConsultancySelector from "./ConsultancySelector";
import PackagesLayout from "./PackagesLayout";

const packages: Packages = {
  Academic: [
    {
      title: "Basic",
      price: 49,
      features: ["1-hour session", "Email support"],
      path: "/book/academic",
    },
    {
      title: "Standard",
      price: 99,
      features: ["3-hour session", "Priority email support", "Feedback report"],
      popular: true,
      path: "/book/academic",
    },
    {
      title: "Premium",
      price: 149,
      features: ["5-hour session", "Zoom calls", "Detailed academic roadmap"],
      path: "/book/academic",
    },
  ],

  Outbound: [
    {
      title: "Basic",
      price: 59,
      features: ["1 consultation", "University list"],
      path: "/book/outbound",
    },
    {
      title: "Standard",
      price: 119,
      features: ["3 consultations", "SOP + LOR help"],
      popular: true,
      path: "/book/outbound",
    },
    {
      title: "Premium",
      price: 179,
      features: ["Full package", "Application review", "Visa guidance"],
      path: "/book/outbound",
    },
  ],

  Entrepreneurial: [
    {
      title: "Basic",
      price: 69,
      features: ["Idea review", "1 session"],
      path: "/book/business",
    },
    {
      title: "Standard",
      price: 129,
      features: ["Business model help", "3 sessions"],
      popular: true,
      path: "/book/business",
    },
    {
      title: "Premium",
      price: 199,
      features: ["Pitch deck feedback", "Startup mentorship", "5 sessions"],
      path: "/book/business",
    },
  ],
};

const PricingPage = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const currentPackages =
    packages[Object.keys(packages)[currentTab] as keyof Packages];

  return (
    <MainLayout>
      <Header />
      <ConsultancySelector
        tabs={Object.keys(packages)}
        currentTab={currentTab}
        onTabChanged={(tabIndex) => setCurrentTab(tabIndex)}
      />
      <PackagesLayout packages={currentPackages} />
    </MainLayout>
  );
};

export default PricingPage;
