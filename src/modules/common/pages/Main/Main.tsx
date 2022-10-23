import { Stack } from "@mui/material";
import React from "react";
import { MenuItem } from "../../components/Menu/MenuItem/MenuItem";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SpaIcon from "@mui/icons-material/Spa";
import ApartmentIcon from "@mui/icons-material/Apartment";

export const Main = () => {
  return (
    <Stack>
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
  );
};
