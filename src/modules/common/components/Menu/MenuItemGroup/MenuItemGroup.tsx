import { Box, Paper, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface MenuItemGroupProps {
  title?: string;
}

export const MenuItemGroup = ({
  children,
  title,
}: PropsWithChildren<MenuItemGroupProps>) => {
  return (
    <Box marginBottom="24px">
      <Typography
        textTransform="uppercase"
        variant="caption"
        sx={{ marginLeft: "16px" }}
      >
        {title}
      </Typography>
      <Paper
        sx={{
          bgcolor: "var(--tg-theme-bg-color)",
          boxShadow: "none",
          borderRadius: "8px",
          ".MuiButtonBase-root:not(:last-child):not(:first-of-type)": {
            borderRadius: 0,
          },
          ".MuiButtonBase-root:last-child:not(:first-of-type)": {
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
          },
          ".MuiButtonBase-root:first-of-type:not(:last-child)": {
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          },
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};
