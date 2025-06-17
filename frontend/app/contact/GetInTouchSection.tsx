import {
  MailOutline as EmailIcon,
  ArrowForwardIos as ForwardArrowIcon,
  LocalPhoneOutlined as PhoneIcon,
  LocationOnOutlined as LocationIcon,
} from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import React, { ElementType } from "react";

interface ContactOption {
  icon: ElementType;
  title: string;
  caption: string;
  contact: string;
  button_text: string;
  path?: string;
}

const GetInTouchSection = () => {
  const contactOptions: ContactOption[] = [
    {
      icon: EmailIcon,
      title: "Email Us",
      caption: "Send us an email anytime.",
      contact: "info@tismah.com",
      button_text: "Submit Email",
      path: "mailto:info@tismah.com",
    },

    {
      icon: PhoneIcon,
      title: "Call Us",
      caption: "We're available during business hours.",
      contact: "+1 (234) 567 890",
      button_text: "Call Now",
      path: "tel:+1234567890",
    },

    {
      icon: LocationIcon,
      title: "Visit Us",
      caption: "We welcome in-person meetings by appointment.",
      contact: "123 Global Street, Suite 500, Dubai, UAE",
      button_text: "Get Directions",
      path: "https://www.google.com/maps/search/?api=1&query=123+Global+Street,+Suite+500,+Dubai,+UAE",
    },
  ];

  return (
    <Box className="!flex flex-col !max-w-6xl !mx-auto !my-auto gap-8 !px-4 !py-16">
      <Box className="!flex flex-col text-center gap-4">
        <Typography className="!text-[clamp(2.25rem,5vw,3rem)] !font-bold">
          Get In Touch
        </Typography>
        <p>
          Have a question or need help?{" "}
          <span className="inline-block">
            Reach out — we’d love to hear from you.
          </span>
        </p>
      </Box>

      <Box className="!flex flex-row flex-wrap gap-8 !mx-auto">
        {contactOptions.map((option, i) => (
          <Card
            key={i}
            className="!flex flex-col !p-6 gap-4 !rounded-xl !w-xs !mx-auto justify-between"
          >
            <Box className="!flex flex-col gap-4">
              <option.icon className="!text-5xl !bg-lime-100 rounded-4xl p-3 text-lime-600" />
              <Typography className="!font-bold !text-2xl">
                {option.title}
              </Typography>
            </Box>
            <Box className="!flex flex-col gap-4">
              <p className="!text-md">{option.caption}</p>
              <p className="!text-md !font-bold">{option.contact}</p>
            </Box>
            <Button
              className="!normal-case !font-bold !mr-auto !px-0"
              endIcon={<ForwardArrowIcon />}
              disableRipple
              href={option.path}
              sx={{
                color: "#65a30d",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#4d7c0f",
                },
              }}
            >
              {option.button_text}
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default GetInTouchSection;
