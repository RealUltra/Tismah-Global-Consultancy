import { Badge, Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box className="!flex flex-col !py-16 !px-8">
      <Box className="!flex flex-col !mx-auto gap-4">
        <Badge className="!rounded-4xl border-1 px-4 !mx-auto !py-2 !text-xs !border-gray-300 !text-gray-500 !font-medium">
          Questions & Answers
        </Badge>

        <Typography className="!font-bold !text-4xl !text-center">
          Frequently Asked Questions
        </Typography>

        <p className="text-md text-gray-500 font-semibold text-center">
          Find answers to the most common questions about our consultancy
          services.
        </p>
      </Box>
    </Box>
  );
};

export default Header;
