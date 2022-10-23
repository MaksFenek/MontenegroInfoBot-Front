import React from "react";
import { Input } from "../components/Input";
import { MenuItemGroup } from "../components/Menu/MenuItemGroup";

export const AddressForm = () => {
  return (
    <MenuItemGroup description="You can add a map link here">
      <Input placeholder="Address" />
    </MenuItemGroup>
  );
};
