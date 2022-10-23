import React from "react";
import { Routes as RoutesGroup, Route } from "react-router-dom";
import { MainLayout } from "../modules/common/layout/MainLayout/MainLayout";
import { Main } from "../modules/common/pages/Main/Main";
import { MAIN_PAGE } from "./constants";

export const Routes = () => {
  return (
    <RoutesGroup>
      <Route element={<MainLayout />}>
        <Route path={MAIN_PAGE} element={<Main />} />
      </Route>
    </RoutesGroup>
  );
};
