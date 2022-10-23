import { Divider } from "@mui/material";
import React from "react";
import { MenuItem } from "../../../common/components/Menu/MenuItem/MenuItem";
import { MenuItemCheckbox } from "../../../common/components/Menu/MenuItem/MenuItemCheckbox";
import { MenuItemGroup } from "../../../common/components/Menu/MenuItemGroup/MenuItemGroup";
import { useBackButton } from "../../../common/hooks/useBackButton";

export const EventsFilter = () => {
  useBackButton(true);
  return (
    <>
      <MenuItemGroup title="Filters">
        <MenuItem>City</MenuItem>
        <Divider />
        <MenuItem>Date</MenuItem>
        <Divider />
        <MenuItem>Category</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup title="Sorting">
        <MenuItem>By Date</MenuItem>
        <Divider />
        <MenuItem>By Guests</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup title="Additional">
        <MenuItemCheckbox>Show Archived</MenuItemCheckbox>
      </MenuItemGroup>
    </>
  );
};

export default EventsFilter;
