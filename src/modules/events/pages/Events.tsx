import { Box, Stack } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useBackButton } from "../../common/hooks/useBackButton";
import { useNavigate } from "react-router-dom";
import { EVENTS_ADD_PAGE } from "../../../routes/constants";
import { EventCard } from "../components/EventCard/EventCard";
import { EventHeader } from "../../common/components/Header/EventHeader";

const MainButton = Telegram.WebApp.MainButton;

export const Events = () => {
  useBackButton(true);
  const navigate = useNavigate();

  const onAddClick = useCallback(() => {
    navigate(EVENTS_ADD_PAGE);
  }, [navigate]);

  useEffect(() => {
    MainButton.setText("Add Event");
    MainButton.show();
    MainButton.onClick(onAddClick);

    return () => {
      MainButton.hide();
      MainButton.offClick(onAddClick);
    };
  }, [onAddClick]);

  return (
    <Box>
      <EventHeader />
      <Stack spacing={2} mt="42px" paddingY="10px" overflow="scroll">
        <EventCard
          id="1"
          image="https://random.imagecdn.app/500/150"
          created_at={Date.now()}
          date={Date.now()}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illo quas minima delectus ipsam pariatur, dolorum eius soluta nisi nostrum a ducimus mollitia alias nesciunt facilis aperiam ex, earum eos."
          title="Lorem ipsum dolor sit amet consectetur"
          user={Telegram.WebApp.initDataUnsafe.user!}
          categories={["Eventsdfsdf", "Hsdfello", "Wesdfsdfll"]}
          city="Tivat"
        />
        <EventCard
          id="2"
          image="https://random.imagecdn.app/500/150"
          created_at={Date.now()}
          date={Date.now()}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illo quas minima delectus ipsam pariatur, dolorum eius soluta nisi nostrum a ducimus mollitia alias nesciunt facilis aperiam ex, earum eos."
          title="Lorem ipsum dolor sit amet consectetur"
          user={Telegram.WebApp.initDataUnsafe.user!}
          categories={["Event", "Hello", "Well"]}
          city="Tivat"
        />
        <EventCard
          id="3"
          image="https://random.imagecdn.app/500/150"
          created_at={Date.now()}
          date={Date.now()}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illo quas minima delectus ipsam pariatur, dolorum eius soluta nisi nostrum a ducimus mollitia alias nesciunt facilis aperiam ex, earum eos."
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illo quas minima delectus ipsam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illo quas minima delectus ipsam"
          user={Telegram.WebApp.initDataUnsafe.user!}
          categories={["Event", "Hello", "Well"]}
          city="Tivat"
        />
        <EventCard
          id="4"
          image="https://random.imagecdn.app/500/150"
          created_at={Date.now()}
          date={Date.now()}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illo quas minima delectus ipsam pariatur, dolorum eius soluta nisi nostrum a ducimus mollitia alias nesciunt facilis aperiam ex, earum eos."
          title="Lorem ipsum dolor sit amet consectetur"
          user={Telegram.WebApp.initDataUnsafe.user!}
          categories={["Event", "Hello", "Well"]}
          city="Tivat"
        />
      </Stack>
    </Box>
  );
};

export default Events;
