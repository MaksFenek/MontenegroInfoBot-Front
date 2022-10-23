import { Box, Card, CardMedia, Typography } from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBackButton } from "../../common/hooks/useBackButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Account } from "../../common/components/Account";
import { SectionTitle } from "../../common/components/SectionTitle";
import { EventCardDate } from "../components/EventCardDate";

const MainButton = Telegram.WebApp.MainButton;

const item = {
  image: "https://random.imagecdn.app/500/150",
  date: Date.now(),
  title: "Lorem ipsum dolor sit amet consectetur",
  city: "Tivat",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore, autem vel architecto, earum temporibus natus fugit blanditiis est, voluptas adipisci? Aut repellendus necessitatibus atque eius. Id distinctio repudiandae cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore, autem vel architecto, earum temporibus natus fugit blanditiis est, voluptas adipisci? Aut repellendus necessitatibus atque eius. Id distinctio repudiandae cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore, autem vel architecto, earum temporibus natus fugit blanditiis est, voluptas adipisci? Aut repellendus necessitatibus atque eius. Id distinctio repudiandae cupiditate.",
  user: Telegram.WebApp.initDataUnsafe.user,
};

export const Event = () => {
  useBackButton(true);
  const { id } = useParams();

  useEffect(() => {
    MainButton.setText("Sign up for Event");
    MainButton.show();

    return () => {
      MainButton.hide();
    };
  }, []);

  return (
    <>
      <Card>
        <EventCardDate
          date={item.date}
          sx={{
            top: "10px",
            right: "15px",
          }}
        />
        <CardMedia component="img" height="250" src={item.image}></CardMedia>
      </Card>
      <Box width="100%" display="flex" justifyContent="space-between" mt="10px">
        <Typography
          variant="h6"
          gutterBottom
          color="var(--tg-theme-hint-color)"
        >
          <LocationOnIcon sx={{ height: "16px", width: "16px" }} /> {item.city}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          color="var(--tg-theme-hint-color)"
        >
          {dayjs(item.date).format("HH:mm")}
        </Typography>
      </Box>
      <Typography variant="h5" gutterBottom>
        {item.title}
      </Typography>
      <SectionTitle>About</SectionTitle>
      <Typography variant="body2" gutterBottom>
        {item.description}
      </Typography>
      <SectionTitle>Author</SectionTitle>
      <Account user={item.user!} />
    </>
  );
};

export default Event;
