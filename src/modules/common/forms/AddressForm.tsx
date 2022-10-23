import { InputProps } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Input } from "../components/Input";
import { MenuItemGroup } from "../components/Menu/MenuItemGroup";

interface AddressFormProps extends Omit<InputProps, "error"> {
  error?: string;
}

export const AddressForm = React.forwardRef(
  ({ error, ...props }: AddressFormProps, ref) => {
    const { t } = useTranslation();
    return (
      <MenuItemGroup
        description={t("You can add a map link here")}
        error={error}
      >
        <Input placeholder={t("Address")} ref={ref} {...props} />
      </MenuItemGroup>
    );
  }
);
