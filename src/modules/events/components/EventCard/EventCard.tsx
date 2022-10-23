import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { TelegramWebApps } from "../../../../global";
import _ from "lodash";
import { Box } from "@mui/system";
import dayjs from "dayjs";

export interface EventCardProps {
  id: string;
  image?: string;
  title: string;
  description: string;
  created_at: number;
  date: number;
  user: TelegramWebApps.WebAppUser;
  categories: string[];
  city: string;
}

export const EventCard = ({
  image,
  title,
  description,
  created_at,
  date,
  user,
  categories,
  city,
}: EventCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        boxShadow: "none",
        position: "relative",
      }}
    >
      <Typography
        gutterBottom
        variant="h5"
        textAlign="end"
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          bgcolor: "var(--tg-card-bg-color)",
          opacity: 0.8,
          p: "4px 8px",
          borderRadius: "8px",
        }}
      >
        {city}
      </Typography>
      <Typography
        variant="body1"
        textAlign="end"
        sx={{
          position: "absolute",
          top: "150px",
          right: "10px",
          bgcolor: "var(--tg-card-bg-color)",
          opacity: 0.8,
          p: "4px 8px",
          borderRadius: "8px",
        }}
      >
        {dayjs(date).format("HH:mm DD.MM.YY")}
      </Typography>
      {image && <CardMedia component="img" height="200" image={image} />}
      <CardContent>
        <Box justifyContent="space-between" display="flex">
          <Typography gutterBottom variant="caption">
            {_.map(categories, (category) => _.capitalize(category)).join(
              " / "
            )}
          </Typography>
          <Box>
            <Typography variant="caption" component="p" textAlign="right">
              @{_.truncate(user.username, { length: 20 })}
              <br />
              {dayjs(created_at).format("DD.MM.YY")}
            </Typography>
          </Box>
        </Box>
        <Typography gutterBottom variant="body1" component="div">
          {_.truncate(title, { length: 100 })}
        </Typography>
        <Typography
          variant="body2"
          color="var(--tg-theme-hint-color)"
          fontWeight="300"
        >
          {_.truncate(description, { length: 200 })}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 0 }}>
        <ButtonGroup variant="contained" fullWidth>
          <Button
            disableRipple
            size="medium"
            sx={{ borderRadius: 0, bgcolor: "var(--tg-theme-button-color)" }}
          >
            Sign up
          </Button>
          <Button
            disableRipple
            size="medium"
            sx={{ borderRadius: 0, bgcolor: "var(--tg-theme-button-color)" }}
          >
            Learn more
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};
