import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

interface ServiceInfo {
  name: string;
  description: string;
}

const ServicesSection = () => {
  const services: ServiceInfo[] = [
    {
      name: "Academic Consultancy",
      description:
        "Guidance for university applications, scholarships and essays.",
    },
    {
      name: "Outbound Consultancy",
      description: "Support with immigration, visas, and relocation.",
    },
    {
      name: "Entrepreneurial Consultancy",
      description: "Help with launching, funding, and scaling your venture.",
    },
  ];

  return (
    <Box className="!flex !flex-col !gap-8 !mx-auto !max-w-6xl !px-8 !pb-16">
      <Typography className="!text-3xl !font-bold !text-center">
        Our Services
      </Typography>

      <Box className="!flex !flex-row !flex-wrap !gap-8">
        {services.map((s) => (
          <Card className="!flex !flex-col !max-w-xs !px-4 !py-4 !gap-4 !justify-between !mx-auto !rounded-xl">
            <Typography className="!font-bold !text-lg !text-center !my-auto !text-lime-700 uppercase">
              {s.name}
            </Typography>
            <p className="text-center text-md">{s.description}</p>
            <Button className="!rounded-4xl !bg-white !text-lime-600 !border-1 !border-lime-600 !w-fit !px-4 !mx-auto !my-2 !text-xs">
              Learn More
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;
