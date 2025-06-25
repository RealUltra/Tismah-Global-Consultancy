"use client";

import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Package {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

interface Packages {
  [key: string]: Package[];
}

const packages: Packages = {
  Academic: [
    {
      title: "Basic",
      price: "$49",
      features: ["1-hour session", "Email support"],
    },
    {
      title: "Standard",
      price: "$99",
      features: ["3-hour session", "Priority email support", "Feedback report"],
      popular: true,
    },
    {
      title: "Premium",
      price: "$149",
      features: ["5-hour session", "Zoom calls", "Detailed academic roadmap"],
    },
  ],
  Outbound: [
    {
      title: "Basic",
      price: "$59",
      features: ["1 consultation", "University list"],
    },
    {
      title: "Standard",
      price: "$119",
      features: ["3 consultations", "SOP + LOR help"],
      popular: true,
    },
    {
      title: "Premium",
      price: "$179",
      features: ["Full package", "Application review", "Visa guidance"],
    },
  ],
  Entrepreneurial: [
    { title: "Basic", price: "$69", features: ["Idea review", "1 session"] },
    {
      title: "Standard",
      price: "$129",
      features: ["Business model help", "3 sessions"],
      popular: true,
    },
    {
      title: "Premium",
      price: "$199",
      features: ["Pitch deck feedback", "Startup mentorship", "5 sessions"],
    },
  ],
};

const ExamplePricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Academic");

  return (
    <div className="!min-h-screen !bg-[#f9fafb] !py-16 !px-4 md:!px-8 lg:!px-16">
      <Typography
        variant="h4"
        className="!text-5xl !font-extrabold !text-center !mb-4"
      >
        Our Pricing Packages
      </Typography>
      <Typography className="!text-lg !text-gray-500 !text-center !mb-12">
        Choose the plan that fits your goals
      </Typography>

      <div className="!flex !justify-center !mb-12">
        <div className="!inline-flex !bg-gray-200 !p-2 !rounded-full !shadow-inner">
          {Object.keys(packages).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`!px-6 !py-2 !font-medium !rounded-full !transition
                ${
                  activeTab === key
                    ? "!bg-white !shadow !text-blue-600"
                    : "!text-gray-600 hover:!text-blue-600"
                }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !gap-8 !max-w-[1280px] !mx-auto">
        {packages[activeTab].map((pkg: Package, index: number) => {
          const isPopular = pkg.popular;
          return (
            <div
              key={index}
              className={`!relative ${isPopular ? "!scale-105 !z-10" : ""}`}
            >
              {isPopular && (
                <div className="!absolute !top-4 !right-4 !bg-amber-400 !text-white !text-xs !font-bold !px-3 !py-1 !rounded-full !z-20">
                  Most Popular
                </div>
              )}
              <Card
                className={`!rounded-3xl !shadow-xl hover:!shadow-2xl !transition-transform hover:!-translate-y-1 !h-full ${
                  isPopular
                    ? "!bg-gradient-to-b !from-white !to-blue-50 !border !border-blue-200"
                    : "!bg-white"
                }`}
              >
                <CardContent className="!p-8 !flex !flex-col !justify-between !h-full">
                  <div>
                    <Typography className="!text-xl !font-semibold !text-center !mb-2 !text-gray-800">
                      {pkg.title}
                    </Typography>
                    <Typography className="!text-4xl !font-extrabold !text-center !text-blue-600 !mb-6">
                      {pkg.price}
                    </Typography>
                    <ul className="!space-y-3 !text-sm !text-gray-600 !pl-0 !mb-8">
                      {pkg.features.map((feature: string, i: number) => (
                        <li key={i} className="!flex !items-start">
                          <CheckCircleIcon
                            className="!text-green-500 !mr-2 !mt-0.5"
                            fontSize="small"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    className="!w-full !py-3 !rounded-full !text-white !bg-blue-600 hover:!bg-blue-700 !font-semibold !transition"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExamplePricingPage;
