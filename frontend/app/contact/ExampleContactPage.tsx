"use client";

import React, { FormEvent, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Divider,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactPage = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <Box className="w-full bg-white text-gray-900">
      {/* Header */}
      <Box className="text-center py-16 px-4">
        <Typography variant="h3" className="font-bold mb-4">
          Get in Touch
        </Typography>
        <Typography className="max-w-xl mx-auto text-gray-600">
          Have a question or need help? Reach out — we’d love to hear from you.
        </Typography>
      </Box>

      {/* Main Grid */}
      <Box className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 pb-20">
        {/* Contact Form */}
        <Box component="form" onSubmit={handleSubmit} className="space-y-6">
          <Typography variant="h5" className="font-semibold mb-4">
            Send a Message
          </Typography>
          <TextField label="Your Name" variant="outlined" fullWidth required />
          <TextField
            label="Your Email"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField label="Subject" variant="outlined" fullWidth required />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={5}
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            className="!bg-lime-600 !rounded-lg !text-white w-full"
          >
            Send Message
          </Button>
        </Box>

        {/* Contact Info */}
        <Box className="space-y-8">
          <Typography variant="h5" className="font-semibold">
            Contact Information
          </Typography>
          <Divider />
          <Box className="flex gap-4 items-start">
            <MailOutlineIcon className="text-lime-600 mt-1" />
            <Box>
              <Typography className="font-semibold">Email</Typography>
              <Typography className="text-gray-600">
                info@tismahglobal.com
              </Typography>
            </Box>
          </Box>

          <Box className="flex gap-4 items-start">
            <PhoneIcon className="text-lime-600 mt-1" />
            <Box>
              <Typography className="font-semibold">Phone</Typography>
              <Typography className="text-gray-600">+1 234 567 890</Typography>
            </Box>
          </Box>

          <Box className="flex gap-4 items-start">
            <LocationOnIcon className="text-lime-600 mt-1" />
            <Box>
              <Typography className="font-semibold">Office Address</Typography>
              <Typography className="text-gray-600">
                123 Global Street
                <br />
                Suite 500, Dubai, UAE
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* FAQ CTA */}
      <Box className="bg-gray-100 py-12 text-center px-4">
        <Typography variant="h6" className="mb-2 font-semibold">
          Need Answers Fast?
        </Typography>
        <Typography className="mb-4 text-gray-600">
          Visit our FAQ section or reach out to us directly.
        </Typography>
        <Button
          variant="outlined"
          href="/faq"
          className="!border-lime-600 !text-lime-600 !rounded-md"
        >
          Go to FAQ
        </Button>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={4000}
        message="Message sent successfully!"
      />
    </Box>
  );
};

export default ContactPage;
