"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Person as PersonIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BookingTypeModal from "./BookingTypeModal";

interface NavItem {
  label: string;
  path: string;
  onClick?: () => void;
}

const NavBar = () => {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    {
      label: "Book a Consult",
      path: "/book",
      onClick: () => setModalOpen(true),
    },
    { label: "Pricing", path: "/pricing" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppBar className="!sticky !bg-white !h-20 !grid">
      <Toolbar className="!justify-between !max-w-7xl !mx-auto !w-full">
        {/* Title */}
        <Typography className="!text-black !font-bold !text-2xl select-none">
          <span className="text-lime-600">Tismah</span> Global
        </Typography>

        {/* Nav items [Desktop] */}
        <Box className="!hidden lg:flex! !gap-8">
          {navItems.map((item, i) => {
            return (
              <MenuItem
                key={i}
                className="!text-sm !font-semibold !px-0"
                component={item.onClick === undefined ? Link : "li"}
                href={item.onClick === undefined ? item.path : undefined}
                onClick={item.onClick}
                selected={
                  pathname === item.path ||
                  (item.path !== "/" && pathname.startsWith(item.path))
                }
                disableRipple
                sx={{
                  color: "black",
                  "&.Mui-selected": {
                    backgroundColor: "transparent",
                    color: "#65a30d",
                    borderBottom: "2px solid",
                    paddingBottom: "4px",
                  },
                  "&:hover, &.Mui-selected:hover": {
                    backgroundColor: "transparent",
                    color: "#65a30d",
                  },
                }}
              >
                {item.label}
              </MenuItem>
            );
          })}
        </Box>

        {/* User Dashboard & Sign Out buttons [Desktop] */}
        <Box className="!hidden lg:flex! !gap-4">
          <Button
            variant="contained"
            className="!rounded-4xl !bg-lime-600 !font-semibold !normal-case"
            startIcon={<PersonIcon />}
          >
            Dashboard
          </Button>
          <Button
            variant="contained"
            className="!rounded-lg !bg-transparent !text-black !font-semibold !normal-case"
            startIcon={<LogoutIcon />}
          >
            Sign Out
          </Button>
        </Box>

        {/* Hamburger Button for Mobile Devices */}
        <IconButton className="lg:hidden!" onClick={() => setMobileOpen(true)}>
          <MenuIcon className="!text-4xl" />
        </IconButton>

        {/* Menu for Mobile Devices */}
        <Drawer
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          anchor="top"
        >
          <Box className="!flex !flex-col !px-8 !mx-auto !max-w-sm !w-full !gap-0 !mt-6">
            {/* Nav items [Mobile] */}
            {navItems.map((item, i) => {
              return (
                <MenuItem
                  key={i}
                  className="!text-sm !font-semibold !rounded-lg"
                  component={item.onClick === undefined ? Link : "li"}
                  href={item.onClick === undefined ? item.path : undefined}
                  onClick={item.onClick}
                  selected={
                    pathname === item.path ||
                    (item.path !== "/" && pathname.startsWith(item.path))
                  }
                  disableRipple
                  sx={{
                    color: "black",
                    "&.Mui-selected": {
                      backgroundColor: "rgba(0, 255, 0, 0.15)",
                      color: "#4d7c0f",
                    },
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#65a30d",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "rgba(0, 255, 0, 0.15)",
                    },
                  }}
                >
                  {item.label}
                </MenuItem>
              );
            })}

            <Divider />

            {/* User Dashboard & Sign Out buttons [Mobile] */}
            <Box className="!mt-2 !mb-6 !flex !flex-col !gap-3">
              <Button
                variant="contained"
                className="!bg-lime-600 !font-semibold !py-2 !rounded-md !normal-case"
                startIcon={<PersonIcon />}
              >
                Dashboard
              </Button>
              <Button
                variant="contained"
                className="!bg-transparent !text-black !font-semibold !py-2 !rounded-md !normal-case"
                startIcon={<LogoutIcon />}
              >
                Sign Out
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>

      {modalOpen && (
        <BookingTypeModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </AppBar>
  );
};

export default NavBar;
