import { Badge, Box, IconButton, useScrollTrigger } from "@mui/material";
import React from "react";
import { Account } from "./Account";
import { Search } from "./Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { EVENTS_FILTER_PAGE, SETTINGS_PAGE } from "../../../routes/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFilters } from "../../events/reducers/filter/filter.selector";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import _ from "lodash";

export const Header = () => {
  const user = Telegram.WebApp.initDataUnsafe.user;
  const navigate = useNavigate();
  const filters = useSelector(selectFilters);
  const trigger = useScrollTrigger({
    threshold: 30,
    disableHysteresis: true,
  });

  const filterSize = _(filters).values().filter(Boolean).size();

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="var(--tg-theme-bg-color)"
        p="6px 16px 4px 16px"
        borderBottom="1px var(--tg-divider-border-color) solid"
        position="fixed"
        top={trigger ? "-52px" : "0"}
        left="0"
        right="0"
        zIndex="10"
        sx={{ transition: "0.2s linear top" }}
      >
        <Account user={user!} />
        <IconButton
          onClick={() => navigate(SETTINGS_PAGE)}
          disableRipple
          sx={{
            p: "3px",
            height: "32px",
            width: "32px",
          }}
        >
          <SettingsOutlinedIcon
            sx={{
              fill: "var(--tg-theme-button-color)",
            }}
          />
        </IconButton>
      </Box>
      <Box
        bgcolor="var(--tg-theme-bg-color)"
        position="fixed"
        p="6px 16px 6px 16px"
        top={trigger ? "0px" : "52px"}
        left="0"
        right="0"
        borderBottom="1px var(--tg-divider-border-color) solid"
        zIndex="10"
        sx={{ transition: "0.2s linear top" }}
      >
        <Box display="flex" alignItems="center">
          <Search />
          <Badge
            badgeContent={filterSize}
            color="default"
            sx={{
              ".MuiBadge-badge": {
                bgcolor: "var(--tg-theme-button-color)",
                top: "4px",
              },
            }}
          >
            <IconButton
              onClick={() => navigate(EVENTS_FILTER_PAGE)}
              disableRipple
              sx={{
                p: "3px",
                marginLeft: "8px",
                height: "24px",
                width: "24px",
              }}
            >
              <FilterAltIcon
                sx={{
                  height: "18px",
                  width: "18px",
                  fill: "var(--tg-theme-button-color)",
                }}
              />
            </IconButton>
          </Badge>
        </Box>
      </Box>
    </>
  );
};
