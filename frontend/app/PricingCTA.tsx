import { Box, Button, Typography } from "@mui/material";
import React from "react";

const PricingCTA = () => {
  return (
    <Box className="!mt-16 !bg-green-900 !px-12 !py-16 !flex flex-col !justify-center">
      <Box className="!flex flex-col !gap-6 !mx-auto !max-w-6xl !text-white">
        <Typography className="!font-bold !text-3xl !text-center">
          Book an Appointment Today
        </Typography>

        <p className="text-center">
          Choose from flexible plans designed for your goals
        </p>

        <Box className="flex flex-wrap !gap-2 md:gap-4! !mx-auto !mt-4">
          <Button className="!rounded-4xl !bg-lime-600 !text-white !font-semibold !text-xl !px-8 !py-4 !mx-auto !w-full md:w-auto! !normal-case">
            Book Now
          </Button>
          <Button className="!rounded-4xl !bg-white !text-lime-600  !font-semibold !text-xl !px-8 !py-4 !mx-auto !w-full md:w-auto! !normal-case">
            View Pricing
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingCTA;
