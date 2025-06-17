import { Email as EmailIcon, Phone as PhoneIcon } from "@mui/icons-material";
import { Box, Button, MenuItem, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Pricing", path: "/pricing" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
    { label: "Book Now", path: "/book" },
  ];

  return (
    <Box className="!bg-gray-200">
      <Box className="!flex flex-row flex-wrap gap-12 !max-w-6xl !mx-auto !justify-between !px-16 !py-16">
        <Box className="!flex flex-col gap-2">
          <Typography className="!text-black !font-bold !text-2xl select-none">
            <span className="text-lime-600">Tismah</span> Global
          </Typography>
          <p className="text-md text-gray-500">
            Your trusted consultancy partner.
          </p>
        </Box>

        <Box className="!flex flex-col gap-2">
          <Typography className="!text-black !font-bold !text-lg">
            Quick Links
          </Typography>
          <Box className="!flex flex-col">
            {quickLinks.map((item, i) => (
              <MenuItem
                key={i}
                className="!text-sm !normal-case !px-0 !text-gray-500 hover:text-lime-600! hover:bg-transparent!"
                component={Link}
                href={item.path}
                disableRipple
              >
                {item.label}
              </MenuItem>
            ))}
          </Box>
        </Box>

        <Box className="!flex flex-col gap-2">
          <Typography className="!text-black !font-bold !text-lg">
            Contact Us
          </Typography>

          <Box className="!flex flex-col">
            <Box className="!flex flex-row gap-2 !items-center">
              <EmailIcon fontSize="small" />
              <Button
                className="!text-gray-500 !text-sm !normal-case hover:text-lime-600! hover:bg-transparent!"
                disableRipple
                href="mailto:info@tismah.com"
              >
                info@tismah.com
              </Button>
            </Box>

            <Box className="!flex flex-row gap-2 !items-center">
              <PhoneIcon fontSize="small" />
              <Button
                className="!text-gray-500 !text-sm !normal-case hover:text-lime-600! hover:bg-transparent!"
                disableRipple
                href="tel:+1234567890"
              >
                +1 234 567 890
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
