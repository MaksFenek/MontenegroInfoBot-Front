import { Input as InputBase, InputProps } from "@mui/material";
import React from "react";

export const Input = React.memo(
  React.forwardRef<any, InputProps>(({ sx, ...props }, ref) => {
    return (
      <InputBase
        ref={ref}
        fullWidth
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "var(--tg-theme-hint-color)",
          fontSize: "14px",
          fontWeight: "300",
          p: "8px 16px",
          borderRadius: "8px",
          alignItems: "center",
          "::after, ::before": {
            border: "none !important",
          },
          ":hover": {
            "::before": {
              border: "none !important",
            },
          },
          ...sx,
        }}
        {...props}
      ></InputBase>
    );
  })
);
