import React from "react";
import { MenuItem, MenuItemProps } from "./MenuItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";

export const MenuItemArrow = ({ value, ...props }: MenuItemProps) => {
  return (
    <MenuItem
      endIcon={
        <>
          {value && (
            <Typography
              variant="caption"
              fontSize="1em !important"
              lineHeight="1 !important"
            >
              {value}
            </Typography>
          )}
          <ArrowForwardIosIcon
            sx={{
              marginLeft: "auto",
              height: 16,
              width: 16,
              color: "var(--tg-arrow-color)",
            }}
          />
        </>
      }
      {...props}
    ></MenuItem>
  );
};
