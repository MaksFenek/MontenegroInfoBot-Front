import { Divider, DividerProps, Typography } from "@mui/material";
import React from "react";

export const SectionTitle = ({
  children,
  ...props
}: React.PropsWithChildren<DividerProps>) => {
  return (
    <Divider textAlign="left" {...props}>
      <Typography variant="caption" gutterBottom>
        {children}
      </Typography>
    </Divider>
  );
};
