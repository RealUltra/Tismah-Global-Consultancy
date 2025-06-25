import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface Props {
  package: Package;
}

const PricingCard = (props: Props) => {
  return (
    <Card className="!flex flex-col gap-8 !w-xs !bg-white !rounded-3xl !py-8 !px-8">
      <Box className="!flex flex-col gap-2 text-center">
        <Typography className="!text-xl !font-bold">
          {props.package.title}
        </Typography>

        <Typography className="!text-3xl !font-bold !text-lime-600">
          ${props.package.price}
        </Typography>
      </Box>

      <Box className="!flex flex-col gap-2">
        {props.package.features.map((feature) => {
          return (
            <p>
              <CheckCircleIcon className="!text-green-600 !mr-4" />
              {feature}
            </p>
          );
        })}
      </Box>

      <Button
        className="!normal-case !bg-lime-600 !text-white !font-bold !text-base !rounded-4xl !py-2 !mt-auto"
        LinkComponent={Link}
        href={props.package.path}
      >
        Book Now
      </Button>
    </Card>
  );
};

export default PricingCard;
