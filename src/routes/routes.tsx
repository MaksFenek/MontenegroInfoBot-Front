import React from "react";
import { Routes as RoutesGroup, Route, Navigate } from "react-router-dom";
import { MainLayout } from "../modules/common/layout/MainLayout";
import {
  CONTACT_PAGE,
  EVENTS_ADDS_FORM_PAGES,
  EVENTS_ADD_PAGE,
  EVENTS_FILTER_FORM_PAGES,
  EVENTS_FILTER_PAGE,
  EVENTS_ITEM_PAGE,
  EVENTS_PAGE,
  MAIN_PAGE,
  SETTINGS_LANGUAGE_PAGE,
  SETTINGS_PAGE,
} from "./constants";

const Events = React.lazy(() => import("../modules/events/pages/Events"));
const Event = React.lazy(() => import("../modules/events/pages/Event"));
const EventsFilter = React.lazy(() => import("../modules/events/pages/Filter"));
const EventAdd = React.lazy(() => import("../modules/events/pages/Add"));
const FilterForms = React.lazy(() => import("../modules/events/pages/Filters"));
const AddsForms = React.lazy(() => import("../modules/events/pages/Adds"));
const Settings = React.lazy(() => import("../modules/common/pages/Settings"));
const Language = React.lazy(() => import("../modules/common/pages/Language"));
const Contacts = React.lazy(() => import("../modules/common/pages/Contacts"));

const EventAddFormProvider = React.lazy(
  () => import("../modules/events/layout/EventAddFormProvider")
);

export const Routes = () => {
  return (
    <RoutesGroup>
      <Route path={MAIN_PAGE} element={<Navigate to={EVENTS_PAGE} />} />
      <Route element={<MainLayout />}>
        <Route path={EVENTS_PAGE} element={<Events />} />
        <Route path={EVENTS_FILTER_PAGE} element={<EventsFilter />} />
        <Route path={EVENTS_ITEM_PAGE} element={<Event />} />
        <Route path={EVENTS_FILTER_FORM_PAGES} element={<FilterForms />} />

        <Route element={<EventAddFormProvider />}>
          <Route path={EVENTS_ADD_PAGE} element={<EventAdd />} />
          <Route path={EVENTS_ADDS_FORM_PAGES} element={<AddsForms />} />
        </Route>

        <Route path={SETTINGS_PAGE} element={<Settings />} />
        <Route path={SETTINGS_LANGUAGE_PAGE} element={<Language />} />

        <Route path={CONTACT_PAGE} element={<Contacts />} />
      </Route>
    </RoutesGroup>
  );
};
