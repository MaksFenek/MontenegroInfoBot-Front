import { Box, IconButton } from "@mui/material";
import React from "react";
import { Search } from "../Search/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { EVENTS_FILTER_PAGE } from "../../../../routes/constants";
import { useNavigate } from "react-router-dom";

export const EventHeader = () => {
  const navigate = useNavigate();
  return (
    <Box
      bgcolor="var(--tg-theme-bg-color)"
      position="fixed"
      p="6px 16px 6px 16px"
      top="0"
      left="0"
      right="0"
      borderBottom="1px var(--tg-divider-border-color) solid"
      zIndex="10"
    >
      <Box display="flex" alignItems="center">
        <Search />
        <IconButton
          onClick={() => navigate(EVENTS_FILTER_PAGE)}
          disableRipple
          sx={{ p: "3px", marginLeft: "8px", height: "24px", width: "24px" }}
        >
          <FilterAltIcon sx={{ height: "18px", width: "18px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};
