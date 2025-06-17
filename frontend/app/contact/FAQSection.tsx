import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const FAQSection = () => {
  return (
    <Box className="!flex !bg-green-900 !py-8">
      <Box className="!flex flex-col !mx-auto !my-auto !text-white !text-center gap-4">
        <Typography className="!text-2xl !font-bold">
          Need Answers Fast?
        </Typography>

        <p className="text-md">
          Visit our FAQ section or reach out to us directly.
        </p>

        <Button
          className="!bg-lime-600 !text-white !mx-auto !rounded-4xl !py-4 !px-8 !font-bold !text-lg !mt-2"
          component={Link}
          href="/faq"
        >
          Go To FAQ
        </Button>
      </Box>
    </Box>
  );
};

export default FAQSection;
