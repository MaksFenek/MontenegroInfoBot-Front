import { Box, BoxProps, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";

export interface EventCardDateProps extends BoxProps {
  date: number;
}

export const EventCardDate = ({ date, sx, ...props }: EventCardDateProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-2px",
        right: "-2px",
        bgcolor: "var(--tg-card-bg-color)",
        opacity: 0.9,
        p: "8px 16px",
        borderBottomLeftRadius: "8px",
        borderTopRightRadius: "16px",
        ...sx,
      }}
    >
      <Typography variant="h4" textAlign="center">
        {dayjs(date).format("DD")}
      </Typography>
      <Typography variant="body2" textAlign="center">
        {dayjs(date).format("MMM")}
      </Typography>
    </Box>
  );
};
