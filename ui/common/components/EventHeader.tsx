import { Box, IconButton } from "@mui/material";
import React from "react";
import { Search } from "./Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { EVENTS_FILTER_PAGE } from "../../../lib/constants/routes";
import { Header } from "./Header";
import { useRouter } from "next/router";

export const EventHeader = () => {
  const { push } = useRouter();
  return (
    <>
      <Header />
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
            onClick={() => push(EVENTS_FILTER_PAGE)}
            disableRipple
            sx={{ p: "3px", marginLeft: "8px", height: "24px", width: "24px" }}
          >
            <FilterAltIcon sx={{ height: "18px", width: "18px" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
