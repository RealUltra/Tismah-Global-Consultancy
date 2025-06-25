import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";
import { Badge, Box, Button, Card, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface Props {
  package: Package;
}

const PricingCard = (props: Props) => {
  const colorClasses =
    props.package.popular === true
      ? "!bg-gradient-to-b from-lime-100 to-white"
      : "!bg-white";

  return (
    <Card
      className={`!flex flex-col relative gap-8 !w-md ${colorClasses} !rounded-3xl !py-8 !px-8 border-gray-200 border-1 hover:shadow-2xl! hover:scale-[1.02]! !transition-transform duration-200 ease-in-out`}
    >
      {props.package.popular === true && (
        <Badge className="!absolute top-4 right-4 !bg-amber-300 !font-bold !text-black !text-xs md:text-sm! px-2 md:px-4! py-1 !rounded-4xl">
          Most Popular
        </Badge>
      )}

      <Box className="!flex flex-col gap-2 text-center">
        <Typography className="!text-xl !font-bold">
          {props.package.title}
        </Typography>

        <Typography className="!text-3xl !font-bold !text-lime-600">
          ${props.package.price}
        </Typography>
      </Box>

      <Box className="!flex flex-col gap-2">
        {props.package.features.map((feature, index) => {
          return (
            <p key={index}>
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
