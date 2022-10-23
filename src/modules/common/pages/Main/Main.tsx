import { Container, Stack } from "@mui/material";
import React from "react";
import { MenuItem } from "../../components/Menu/MenuItem/MenuItem";
import styles from "./Main.module.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SpaIcon from "@mui/icons-material/Spa";
import ApartmentIcon from "@mui/icons-material/Apartment";

export const Main = () => {
  return (
    <Container className={styles.container}>
      <Stack>
        <MenuItem startIcon={<CalendarMonthIcon />}>Events</MenuItem>
        <MenuItem startIcon={<ApartmentIcon />}>Rent/Buy</MenuItem>
        <MenuItem startIcon={<SpaIcon />}>Food</MenuItem>
      </Stack>
    </Container>
  );
};
