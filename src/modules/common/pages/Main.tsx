import { Stack, Typography } from "@mui/material";
import React from "react";
import { MenuItem } from "../components/Menu/MenuItem";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SpaIcon from "@mui/icons-material/Spa";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useBackButton } from "../hooks/useBackButton";

export const Main = () => {
  useBackButton(false);
  return (
    <>
      <Stack minHeight="90%">
        <MenuItem to="/events" startIcon={<CalendarMonthIcon />}>
          Events
        </MenuItem>
        <MenuItem to="/" startIcon={<ApartmentIcon />}>
          Rent/Buy
        </MenuItem>
        <MenuItem to="/" startIcon={<SpaIcon />}>
          Food
        </MenuItem>
      </Stack>
      <Typography
        component="p"
        textAlign="center"
        variant="caption"
        position="absolute"
        bottom="0"
        left="0"
        right="0"
      >
        v0.1.91022b
      </Typography>
    </>
  );
};
