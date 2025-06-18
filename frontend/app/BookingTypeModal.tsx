"use client";

import { Box, Button, Card, Modal, Typography } from "@mui/material";
import React, { ElementType } from "react";
import {
  School as SchoolIcon,
  FlightTakeoff as FlightTakeoffIcon,
  RocketLaunch as RocketLaunchIcon,
} from "@mui/icons-material";
import Link from "next/link";

interface BookingType {
  icon: ElementType;
  title: string;
  path: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

const BookingTypeModal = ({ open, onClose }: Props) => {
  const bookingTypes: BookingType[] = [
    { icon: SchoolIcon, title: "Academic Consultancy", path: "/book/academic" },
    {
      icon: FlightTakeoffIcon,
      title: "Outbound Consultancy",
      path: "/book/outbound",
    },
    {
      icon: RocketLaunchIcon,
      title: "Entrepreneurial Consultancy",
      path: "/book/business",
    },
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="!absolute !top-1/2 !left-1/2 transform -translate-x-1/2 -translate-y-1/2 !bg-white !outline-0 md:rounded-xl! py-8 md:py-12 px-12 w-full md:w-fit">
        <Box className="!flex flex-col gap-4 md:gap-8">
          <Box className="!flex flex-col gap-2">
            <Typography className="!text-md !font-semibold !text-center">
              What type of service are you looking for?
            </Typography>

            <span className="text-xs text-center text-gray-600 font-medium">
              Choose a service to start booking an appointment
            </span>
          </Box>

          <Box className="!flex flex-col !mx-auto">
            {bookingTypes.map((bookingType, i) => (
              <Button
                key={i}
                className="!normal-case"
                disableRipple
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
                component={Link}
                href={bookingType.path}
              >
                <Card className="!flex flex-col !text-xs px-8 py-2 md:py-4 gap-2 !font-medium !rounded-lg !shadow-none !border-1 !border-gray-300 !text-gray-500 hover:bg-lime-100! hover:border-lime-500! !w-full">
                  <bookingType.icon className="!flex !mx-auto !text-lime-600" />
                  <span className="text-center">{bookingType.title}</span>
                </Card>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default BookingTypeModal;
