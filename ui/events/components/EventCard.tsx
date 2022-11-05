import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import _ from "lodash";
import { Box } from "@mui/system";
import dayjs from "dayjs";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { EVENTS_PAGE } from "../../../lib/constants/routes";
import { EventCardDate } from "./EventCardDate";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export interface EventCardProps {
  id: string;
  image?: string;
  title: string;
  date: number;
  city: string;
}

export const EventCard = ({ image, title, date, city, id }: EventCardProps) => {
  const { t } = useTranslation();
  const eventDate = dayjs(date);
  const { push } = useRouter();
  return (
    <Card
      sx={{
        maxWidth: "100%",
        position: "relative",
      }}
    >
      <EventCardDate date={date} />

      {image && <CardMedia component="img" height="160" image={image} />}
      <CardContent
        onClick={() => push(`${EVENTS_PAGE}/${id}`)}
        sx={{
          display: "flex",
          pb: "10px !important",
          cursor: "pointer",
          transition: "background 0.2s ease",
          ":hover": { bgcolor: "var(--tg-menu-item-hover-bg-color)" },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography gutterBottom variant="body1" component="p">
            {_.truncate(title, { length: 65 })}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color="var(--tg-theme-link-color)"
          >
            {eventDate.format("HH:mm")}, {t(city)}
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
