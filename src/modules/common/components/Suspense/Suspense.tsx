import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const Suspense = () => {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      display="flex"
      alignContent="center"
      justifyContent="center"
      bgcolor="var(--tg-theme-bg-color)"
    >
      <CircularProgress
        sx={{
          alignSelf: "center",
        }}
      />
    </Box>
  );
};
