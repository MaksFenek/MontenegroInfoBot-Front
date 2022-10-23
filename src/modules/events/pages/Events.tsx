import { Box, IconButton } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { Search } from "../../common/components/Search/Search";
import { useBackButton } from "../../common/hooks/useBackButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useNavigate } from "react-router-dom";
import { EVENTS_ADD_PAGE, EVENTS_FILTER_PAGE } from "../../../routes/constants";

const MainButton = Telegram.WebApp.MainButton;

export const Events = () => {
  useBackButton(true);
  const navigate = useNavigate();

  const onAddClick = useCallback(() => {
    navigate(EVENTS_ADD_PAGE);
  }, [navigate]);

  useEffect(() => {
    MainButton.setText("Add Event");
    MainButton.show();
    MainButton.onClick(onAddClick);

    return () => {
      MainButton.hide();
      MainButton.offClick(onAddClick);
    };
  }, [onAddClick]);

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
