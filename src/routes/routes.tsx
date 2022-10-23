import React, { Suspense } from "react";
import { Routes as RoutesGroup, Route } from "react-router-dom";
import { MainLayout } from "../modules/common/layout/MainLayout/MainLayout";
import { EVENTS_PAGE, MAIN_PAGE } from "./constants";

import { Main } from "../modules/common/pages/Main/Main";

const Events = React.lazy(
  () => import("../modules/events/pages/Events/Events")
);

export const Routes = () => {
  return (
    <RoutesGroup>
      <Route element={<MainLayout />}>
        <Route path={MAIN_PAGE} element={<Main />} />
        <Route path={EVENTS_PAGE} element={<Events />} />
      </Route>
    </RoutesGroup>
  );
};
