import { Box, Paper, PaperProps, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface MenuItemGroupProps extends PaperProps {
  title?: string;
  description?: string;
}

export const MenuItemGroup = ({
  children,
  title,
  description,
  sx,
  ...props
}: PropsWithChildren<MenuItemGroupProps>) => {
  return (
    <Box marginBottom="24px">
      {title && (
        <Typography
          textTransform="uppercase"
          variant="caption"
          display="block"
          fontWeight="300"
          ml="16px"
          mb="8px"
        >
          {title}
        </Typography>
      )}
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
          ...sx,
        }}
        {...props}
      >
        {children}
      </Paper>
      {description && (
        <Typography
          variant="caption"
          display="block"
          fontSize="12px"
          fontWeight="200"
          ml="16px"
          mt="8px"
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};
