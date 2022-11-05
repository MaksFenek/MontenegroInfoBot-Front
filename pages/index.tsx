import { Box, Stack } from "@mui/material";
import React, { useCallback } from "react";
import { useBackButton } from "lib/hooks/useBackButton";
import { EVENTS_ADD_PAGE } from "lib/constants/routes";
import { EventCard } from "ui/events/components/EventCard";
import { Header } from "ui/common/components/Header";
import { useTranslation } from "next-i18next";
import { useMainButton } from "lib/hooks/useMainButton";
import { useRouter } from "next/router";

export const Events = () => {
  const { t } = useTranslation();

  useBackButton(false);

  const { push } = useRouter();

  const onAddClick = useCallback(() => {
    push(EVENTS_ADD_PAGE);
  }, [push]);

  useMainButton(t("Add Event"), onAddClick);

  return (
    <Box>
      <Header />
      <Stack spacing={2} mt="100px" paddingY="10px" overflow="scroll">
        <EventCard
          id="1"
          image="https://random.imagecdn.app/v1/image?width=400&height=150"
          date={1667562853014}
          title="Lorem ipsum dolor sit amet consectetur"
          city="Tivat"
        />
        <EventCard
          id="2"
          image="https://random.imagecdn.app/v1/image?width=500&height=150"
          date={1667562853014}
          title="Lorem ipsum dolor sit amet consectetur"
          city="Tivat"
        />
        <EventCard
          id="3"
          image="https://random.imagecdn.app/v1/image?width=450&height=150"
          date={1667562853014}
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illo quas minima delectus ipsam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illo quas minima delectus ipsam"
          city="Tivat"
        />
        <EventCard
          id="4"
          image="https://random.imagecdn.app/v1/image?width=400&height=200"
          date={1667562853014}
          title="Lorem ipsum dolor sit amet consectetur"
          city="Tivat"
        />
      </Stack>
    </Box>
  );
};

export default Events;
