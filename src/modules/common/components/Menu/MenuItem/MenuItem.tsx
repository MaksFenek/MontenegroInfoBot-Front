import { Button, ButtonProps, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

export interface MenuItemProps extends ButtonProps {
  to: string;
}

export const MenuItem = ({
  children,
  to,
  ...props
}: PropsWithChildren<MenuItemProps>) => {
  const navigate = useNavigate();
  return (
    <Button
      {...props}
      onClick={() => navigate(to)}
      endIcon={
        <ArrowForwardIosIcon
          sx={{
            marginLeft: "auto",
            height: 16,
            width: 16,
            color: "var(--tg-arrow-color)",
          }}
        />
      }
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
      }}
    >
      <Typography variant="body2" marginRight="auto" fontWeight="300">
        {children}
      </Typography>
    </Button>
  );
};
