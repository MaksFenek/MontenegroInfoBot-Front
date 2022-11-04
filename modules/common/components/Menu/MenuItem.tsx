import { Button, ButtonProps, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";

export interface MenuItemProps extends ButtonProps {
  to?: string;
}

export const MenuItem = ({
  children,
  to,
  sx,
  ...props
}: PropsWithChildren<MenuItemProps>) => {
  const { push } = useRouter();
  return (
    <Button
      onClick={() => to && push(to)}
      variant="text"
      fullWidth
      size="medium"
      disableRipple
      sx={{
        p: "12px 16px",
        textTransform: "none",
        borderRadius: "8px !important",
        bgcolor: "transparent !important",
        ":hover": {
          bgcolor: "var(--tg-menu-item-hover-bg-color) !important",
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
