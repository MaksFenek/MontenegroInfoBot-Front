import { Button, ButtonProps, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

export interface MenuItemProps extends ButtonProps {
  to?: string;
}

export const MenuItem = ({
  children,
  to,
  sx,
  ...props
}: PropsWithChildren<MenuItemProps>) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => to && navigate(to)}
      variant="text"
      fullWidth
      size="medium"
      disableRipple
      sx={{
        p: "12px 16px",
        textTransform: "none",
        borderRadius: "8px",
        ":hover": {
          bgcolor: "var(--tg-menu-item-hover-bg-color)",
        },
        ...sx,
      }}
      {...props}
    >
      <Typography variant="body2" marginRight="auto">
        {children}
      </Typography>
    </Button>
  );
};
