import React from "react";
import { useTranslation } from "react-i18next";
import { Input } from "../components/Input";
import { MenuItemGroup } from "../components/Menu/MenuItemGroup";

export const AddressForm = () => {
  const { t } = useTranslation();
  return (
    <MenuItemGroup description={t("You can add a map link here")}>
      <Input placeholder={t("Address")} />
    </MenuItemGroup>
  );
};
