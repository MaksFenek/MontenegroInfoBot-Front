import { Box, Card, CardMedia, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { useBackButton } from "modules/common/hooks/useBackButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Account } from "modules/common/components/Account";
import { SectionTitle } from "modules/common/components/SectionTitle";
import { EventCardDate } from "modules/events/components/EventCardDate";
import { useMainButton } from "modules/common/hooks/useMainButton";
import { useTranslation } from "next-i18next";

const item = {
  image: "https://random.imagecdn.app/500/150",
  date: 1667562853014,
  title: "Lorem ipsum dolor sit amet consectetur",
  city: "Tivat",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore, autem vel architecto, earum temporibus natus fugit blanditiis est, voluptas adipisci? Aut repellendus necessitatibus atque eius. Id distinctio repudiandae cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore, autem vel architecto, earum temporibus natus fugit blanditiis est, voluptas adipisci? Aut repellendus necessitatibus atque eius. Id distinctio repudiandae cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore, autem vel architecto, earum temporibus natus fugit blanditiis est, voluptas adipisci? Aut repellendus necessitatibus atque eius. Id distinctio repudiandae cupiditate.",
  user: {} as any, //Telegram?.WebApp.initDataUnsafe.user,
};

export const Event = () => {
  const { t } = useTranslation();

  useBackButton(true);
  useMainButton(t("Sign up for Event"));

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
          <LocationOnIcon sx={{ height: "16px", width: "16px" }} />{" "}
          {t(item.city)}
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
      <SectionTitle>{t("About")}</SectionTitle>
      <Typography variant="body2" gutterBottom>
        {item.description}
      </Typography>
      <SectionTitle>{t("Author")}</SectionTitle>
      <Account user={item.user!} />
    </>
  );
};

export default Event;
