import { Divider } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { Input } from "../../common/components/Input";
import { MenuItemGroup } from "../../common/components/Menu/MenuItemGroup";
import { AddEventDataType } from "../../common/constants/types";

export const TitleAndDescription = () => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext<AddEventDataType>();

  return (
    <MenuItemGroup error={errors.title?.message || errors.description?.message}>
      <Input
        {...register("title", {
          required: t("is required", { name: t("Title") }),
          maxLength: {
            value: 100,
            message: t("max length", { name: t("Title"), max: 100 }),
          },
        })}
        placeholder={t("Title")}
      />
      <Divider />
      <Input
        {...register("description", {
          maxLength: {
            value: 1000,
            message: t("max length", { name: t("Description"), max: 1000 }),
          },
        })}
        placeholder={t("Description")}
        multiline
        maxRows={10}
        sx={{
          ".MuiInputBase-inputMultiline": {
            paddingY: "4px",
          },
        }}
      />
    </MenuItemGroup>
  );
};
