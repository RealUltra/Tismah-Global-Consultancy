import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box className="!flex flex-col !py-16 !px-8">
      <Box className="!flex flex-col !mx-auto gap-4 !text-center">
        <Typography className="!font-extrabold !text-5xl">
          Our Pricing Packages
        </Typography>

        <p className="text-xl text-gray-600 font-semibold">
          Choose the plan that fits your goals.
        </p>
      </Box>
    </Box>
  );
};

export default Header;
