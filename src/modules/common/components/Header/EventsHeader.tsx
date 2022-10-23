import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import _ from "lodash";
import { getColorFromText } from "../../utils/getColorFromText";
import VerifiedIcon from "@mui/icons-material/Verified";
import { MenuItem } from "../Menu/MenuItem/MenuItem";
import { Outlet } from "react-router-dom";

export const EventsHeader = () => {
  const user = Telegram.WebApp.initDataUnsafe.user;

  return (
    <>
      <Box
        component="header"
        sx={{
          p: "6px 6px 4px 16px",
          display: "flex",
          gap: "12px",
        }}
      >
        <MenuItem to="/events">Filters</MenuItem>
        <Button>+ Add</Button>
      </Box>
      <Divider />
      <Outlet />
    </>
  );
};
