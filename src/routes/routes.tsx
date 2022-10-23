import React from "react";
import {
  BrowserRouter as Router,
  Routes as RoutesGroup,
  Route,
  Navigate,
} from "react-router-dom";
import App from "../App";
import { Main } from "../modules/common/pages/Main/Main";
import { MAIN_PAGE } from "./constants";

export const Routes = () => {
  return (
    <RoutesGroup>
      <Route path={MAIN_PAGE} element={<Main />} />
    </RoutesGroup>
  );
};
