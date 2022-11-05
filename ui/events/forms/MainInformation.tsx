import { Divider } from "@mui/material";
import dayjs from "dayjs";
import _ from "lodash";
import React, { useEffect } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";
import {
  EVENTS_ADDS_ADDRESS_PAGES,
  EVENTS_ADDS_CITIES_PAGES,
  EVENTS_ADDS_DATE_PAGES,
  EVENTS_ADD_PAGE,
} from "lib/constants/routes";
import { MenuItemArrow } from "ui/common/components/MenuItem/MenuItemArrow";
import { MenuItemGroup } from "ui/common/components/MenuItem/MenuItemGroup";
import { AddEventDataType } from "ui/common/types";

export const MainInformation = () => {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<AddEventDataType>();

  useController({
    control,
    name: "city",
    rules: {
      required: t("is required", { name: t("City") }),
    },
  });

  useController({
    control,
    name: "date",
    rules: {
      required: t("is required", { name: t("Date") }),
    },
  });

  const date = watch("date");

  return (
    <MenuItemGroup
      title={t("Main information")}
      error={
        errors.city?.message || errors.date?.message || errors.address?.message
      }
    >
      <MenuItemArrow to={EVENTS_ADDS_CITIES_PAGES} value={t(watch("city"))}>
        {t("City")}
      </MenuItemArrow>
      <Divider />
      <MenuItemArrow
        to={EVENTS_ADDS_DATE_PAGES}
        value={
          date ? dayjs(Number(date)).format("DD.MM.YYYY HH:mm") : undefined
        }
      >
        {t("Date")}
      </MenuItemArrow>
      <Divider />
      <MenuItemArrow
        to={EVENTS_ADDS_ADDRESS_PAGES}
        value={_.truncate(watch("address"), { length: 30 })}
      >
        {t("Address")}
      </MenuItemArrow>
    </MenuItemGroup>
  );
};
