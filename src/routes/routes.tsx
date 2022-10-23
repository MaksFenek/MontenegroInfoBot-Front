import React, { Suspense } from "react";
import { Routes as RoutesGroup, Route } from "react-router-dom";
import { MainLayout } from "../modules/common/layout/MainLayout/MainLayout";
import { EVENTS_FILTER_PAGE, EVENTS_PAGE, MAIN_PAGE } from "./constants";

import { Main } from "../modules/common/pages/Main/Main";
import { Header } from "../modules/common/components/Header/Header";
import { EventsHeader } from "../modules/common/components/Header/EventsHeader";

const Events = React.lazy(
  () => import("../modules/events/pages/Events/Events")
);
const EventsFilter = React.lazy(
  () => import("../modules/events/pages/Filter/Filter")
);

export const Routes = () => {
  return (
    <RoutesGroup>
      <Route element={<Header />}>
        <Route element={<MainLayout />}>
          <Route path={MAIN_PAGE} element={<Main />} />
        </Route>
      </Route>
      <Route element={<MainLayout />}>
        <Route path={EVENTS_PAGE} element={<Events />} />
        <Route path={EVENTS_FILTER_PAGE} element={<EventsFilter />} />
      </Route>
      {/* <Route element={<EventsHeader />}>
        <Route element={<MainLayout />}>
        </Route>
      </Route> */}
    </RoutesGroup>
  );
};
