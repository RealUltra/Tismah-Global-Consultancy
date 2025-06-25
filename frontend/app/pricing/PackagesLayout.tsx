import { Box } from "@mui/material";
import React from "react";
import PricingCard from "./PricingCard";

interface Props {
  packages: Package[];
}

const PackagesLayout = ({ packages }: Props) => {
  return (
    <Box className="!flex flex-row flex-wrap gap-4 justify-center !my-16 !px-4 !max-w-6xl !mx-auto">
      {packages.map((pkg, index) => {
        return <PricingCard key={index} package={pkg} />;
      })}
    </Box>
  );
};

export default PackagesLayout;
