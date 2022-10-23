import { Divider } from "@mui/material";
import React from "react";
import { EVENTS_FILTER_PAGE } from "../../../routes/constants";
import { MenuItemArrow } from "../../common/components/Menu/MenuItemArrow";
import { MenuItemCheckbox } from "../../common/components/Menu/MenuItemCheckbox";
import { MenuItemGroup } from "../../common/components/Menu/MenuItemGroup";
import { useBackButton } from "../../common/hooks/useBackButton";

export const EventsFilter = () => {
  useBackButton(true);
  return (
    <>
      <MenuItemGroup title="Filters">
        <MenuItemArrow to={`${EVENTS_FILTER_PAGE}/city`} value="Tivat">
          City
        </MenuItemArrow>
        <Divider />
        <MenuItemArrow to={`${EVENTS_FILTER_PAGE}/date`}>Date</MenuItemArrow>
      </MenuItemGroup>
      <MenuItemGroup title="Sorting">
        <MenuItemArrow to={`${EVENTS_FILTER_PAGE}/byDate`} value="By increase">
          By Date
        </MenuItemArrow>
        <Divider />
        <MenuItemArrow to={`${EVENTS_FILTER_PAGE}/byGuest`} value="By decrease">
          By Guests
        </MenuItemArrow>
      </MenuItemGroup>
      <MenuItemGroup title="Additional">
        <MenuItemCheckbox>Show Archived</MenuItemCheckbox>
      </MenuItemGroup>
    </>
  );
};

export default EventsFilter;
