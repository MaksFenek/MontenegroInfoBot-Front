import { Box, Stack } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useBackButton } from "../../common/hooks/useBackButton";
import { useNavigate } from "react-router-dom";
import { EVENTS_ADD_PAGE } from "../../../routes/constants";
import { EventCard } from "../components/EventCard";
import { Header } from "../../common/components/Header";
import { useApplyFilters } from "../hooks/useApplyFilters";
import { useTranslation } from "react-i18next";
import { useMainButton } from "../../common/hooks/useMainButton";

export const Events = () => {
  const { t } = useTranslation();

  useBackButton(false);
  useApplyFilters();

  const navigate = useNavigate();

  const onAddClick = useCallback(() => {
    navigate(EVENTS_ADD_PAGE);
  }, [navigate]);

  useMainButton(t("Add Event"), onAddClick);

  return (
    <Box>
      <Header />
      <Stack spacing={2} mt="100px" paddingY="10px" overflow="scroll">
        <EventCard
          id="1"
          image="https://random.imagecdn.app/v1/image?width=400&height=150"
          date={Date.now()}
          title="Lorem ipsum dolor sit amet consectetur"
          city="Tivat"
        />
        <EventCard
          id="2"
          image="https://random.imagecdn.app/v1/image?width=500&height=150"
          date={Date.now()}
          title="Lorem ipsum dolor sit amet consectetur"
          city="Tivat"
        />
        <EventCard
          id="3"
          image="https://random.imagecdn.app/v1/image?width=450&height=150"
          date={Date.now()}
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illo quas minima delectus ipsam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illo quas minima delectus ipsam"
          city="Tivat"
        />
        <EventCard
          id="4"
          image="https://random.imagecdn.app/v1/image?width=400&height=200"
          date={Date.now()}
          title="Lorem ipsum dolor sit amet consectetur"
          city="Tivat"
        />
      </Stack>
    </Box>
  );
};

export default Events;
