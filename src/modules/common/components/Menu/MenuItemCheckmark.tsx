import React from "react";
import { MenuItem, MenuItemProps } from "./MenuItem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export interface MenuItemCheckmarkProps extends MenuItemProps {
  checked?: boolean;
}

export const MenuItemCheckmark = ({
  checked,
  ...props
}: MenuItemCheckmarkProps) => {
  return (
    <MenuItem
      {...props}
      endIcon={
        checked && (
          <CheckCircleIcon
            sx={{ color: "var(--tg-theme-button-color) !important" }}
          />
        )
      }
    ></MenuItem>
  );
};
