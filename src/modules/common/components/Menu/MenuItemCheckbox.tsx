import { Switch } from "@mui/material";
import React from "react";
import { MenuItem, MenuItemProps } from "./MenuItem";

export const MenuItemCheckbox = (props: MenuItemProps) => {
  return (
    <MenuItem
      {...props}
      endIcon={
        <Switch
          size="small"
          disableRipple
          sx={{
            marginLeft: "auto",
            p: 0,
            color: "var(--tg-theme-button-text-color)",
            ".MuiSwitch-switchBase": {
              p: "1.5px",
              transitionDuration: "200ms",
            },
            ".MuiSwitch-track": {
              borderRadius: "50px",
              bgcolor: "var(--tg-arrow-color)",
            },
            ".MuiSwitch-thumb": {
              bgcolor: "var(--tg-theme-bg-color)",
              height: "21px",
              width: "21px",
              boxShadow: "none",
            },
            ".Mui-checked+.MuiSwitch-track": {
              bgcolor: "var(--tg-theme-button-color) !important",
              opacity: "1 !important",
            },
          }}
        />
      }
    ></MenuItem>
  );
};
