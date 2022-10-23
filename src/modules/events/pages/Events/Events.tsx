import { Box, IconButton } from "@mui/material";
import React from "react";
import { Search } from "../../../common/components/Search/Search";
import { useBackButton } from "../../../common/hooks/useBackButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useNavigate } from "react-router-dom";
import { EVENTS_FILTER_PAGE } from "../../../../routes/constants";

export const Events = () => {
  useBackButton(true);
  const navigate = useNavigate();

  return (
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
  );
};

export default Events;
