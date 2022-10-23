import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import _ from "lodash";
import { Box } from "@mui/system";
import dayjs from "dayjs";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export interface EventCardProps {
  id: string;
  image?: string;
  title: string;
  date: number;
  categories: string[];
  city: string;
}

export const EventCard = ({
  image,
  title,
  date,
  categories,
  city,
}: EventCardProps) => {
  const eventDate = dayjs(date);
  return (
    <Card
      sx={{
        maxWidth: "100%",
        boxShadow: "none",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "75px",
          left: "10px",
          bgcolor: "var(--tg-card-bg-color)",
          opacity: 0.9,
          p: "8px 16px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4" textAlign="center">
          {eventDate.format("DD")}
        </Typography>
        <Typography variant="body2" textAlign="center">
          {eventDate.format("MMM")}
        </Typography>
      </Box>

      {image && <CardMedia component="img" height="160" image={image} />}
      <CardContent
        sx={{
          display: "flex",
          pb: "10px !important",
          cursor: "pointer",
          transition: "background 0.2s ease",
          ":hover": { bgcolor: "var(--tg-menu-item-hover-bg-color)" },
        }}
      >
        <Box>
          <Typography gutterBottom variant="body1" component="p">
            {_.truncate(title, { length: 65 })}
          </Typography>
          <Typography gutterBottom variant="caption" component="p">
            {_.map(categories, (category) => _.capitalize(category)).join(
              " / "
            )}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color="var(--tg-theme-link-color)"
          >
            {eventDate.format("HH:mm")}, {city}
          </Typography>
        </Box>
        <Box alignSelf="center">
          <ArrowForwardIosIcon
            sx={{
              marginX: "6px",
              height: 16,
              width: 16,
              color: "var(--tg-arrow-color)",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
