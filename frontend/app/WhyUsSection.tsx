import { Box, Card, Typography } from "@mui/material";
import React from "react";

interface ReasonInfo {
  title: string;
  description: string;
}

const WhyUsSection = () => {
  const reasons: ReasonInfo[] = [
    {
      title: "Experienced Global Advisors",
      description:
        "Our team brings years of international expertise to guide you through every step with confidence.",
    },
    {
      title: "Transparent Pricing and Packages",
      description:
        "Clear, upfront pricing with no hidden fees—so you always know what you're paying for.",
    },
    {
      title: "One-on-one Personalized Consultations",
      description:
        "Tailored guidance designed specifically for your goals, challenges, and ambitions.",
    },
    {
      title: "End-to-end Support and Accountability",
      description:
        "From first contact to final outcome, we’re with you—offering consistent support and measurable results.",
    },
  ];

  return (
    <Box className="bg-gradient-to-br from-lime-50 to-white">
      <Box className="!flex !flex-col !gap-12 !max-w-6xl !mx-auto !py-12">
        <Box className="!flex !flex-col !gap-4">
          <Typography className="!font-bold !text-3xl !text-center">
            Why Choose Us?
          </Typography>

          <p className="text-center text-md">
            Because your journey deserves expert guidance.
          </p>
        </Box>

        <Box className="!flex !flex-row !flex-wrap !justify-center !gap-8 !px-8">
          {reasons.map((s, index) => (
            <Card
              key={index}
              className="!flex !flex-col !max-w-md !px-4 !py-6 !gap-4 !justify-between !rounded-xl"
            >
              <Typography className="!font-bold !text-lg !mt-auto !text-lime-700">
                {s.title}
              </Typography>
              <p className="text-md">{s.description}</p>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhyUsSection;
