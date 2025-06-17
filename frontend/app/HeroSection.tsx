import { Box, Button, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Box className="!bg-gradient-to-b from-lime-50 to-white min-h-[80vh] !flex">
      <Box className="!mx-auto !my-auto !max-w-3xl !px-16 !flex !flex-col !gap-6">
        <Typography className="!font-bold !text-[clamp(2.25rem,5vw,3.75rem)] text-center !leading-tight">
          Guiding Your Journey{" "}
          <span className="text-lime-600 inline-block">To Success</span>
        </Typography>

        <p className="text-center !text-xl">
          Expert consultancy for students, migrants and entrepreneurs.
        </p>

        <Box className="flex flex-wrap !gap-2 md:gap-4! !mx-auto !mt-4">
          <Button className="!rounded-4xl !bg-lime-600 !text-white !font-semibold !text-xl !px-8 !py-4 !mx-auto !w-full md:w-auto! !normal-case">
            Book Now
          </Button>
          <Button
            className="!rounded-4xl !bg-white !border-lime-600 !border-1 !text-lime-600 !font-semibold !text-xl !px-8 !py-4 !mx-auto !w-full md:w-auto! !normal-case"
            href="#services"
          >
            Explore Services
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
