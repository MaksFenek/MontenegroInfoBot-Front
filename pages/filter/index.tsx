import { Divider } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import {
  EVENTS_FILTER_BYDATE_PAGE,
  EVENTS_FILTER_CITIES_PAGE,
  EVENTS_FILTER_DATE_PAGE,
  EVENTS_FILTER_PAGE,
} from "lib/constants/routes";
import { MenuItemArrow } from "ui/common/components/MenuItem/MenuItemArrow";
import { MenuItemCheckbox } from "ui/common/components/MenuItem/MenuItemCheckbox";
import { MenuItemGroup } from "ui/common/components/MenuItem/MenuItemGroup";
import { useBackButton } from "lib/hooks/useBackButton";
import { useDispatchActionFn } from "lib/hooks/useDispatchActionFn";
import { selectFilters } from "store/filter/filter.selector";
import { setFilter } from "store/filter/filter.slice";

export const EventsFilter = () => {
  const { t } = useTranslation();
  useBackButton(true);
  const { city, date, byDate, byGroup, showArchived } =
    useSelector(selectFilters);

  const onSwitch = useDispatchActionFn(() =>
    setFilter({ key: "showArchived", value: !showArchived })
  );

  const dateRange = () => {
    const from = date?.from
      ? dayjs(date?.from, "DDMMYYYY", true).format("DD.MM.YYYY")
      : undefined;
    const to = date?.to
      ? dayjs(date?.to, "DDMMYYYY", true).format("DD.MM.YYYY")
      : undefined;
    return ` ${from ? t("From") : ""} ${from || ""} ${to ? t("To") : ""} ${
      to || ""
    }`;
  };

  return (
    <>
      <MenuItemGroup title={t("Filters")}>
        <MenuItemArrow to={EVENTS_FILTER_CITIES_PAGE} value={city && t(city)}>
          {t("City")}
        </MenuItemArrow>
        <Divider />
        <MenuItemArrow to={EVENTS_FILTER_DATE_PAGE} value={dateRange()}>
          {t("Date")}
        </MenuItemArrow>
      </MenuItemGroup>
      <MenuItemGroup title={t("Sorting")}>
        <MenuItemArrow
          to={EVENTS_FILTER_BYDATE_PAGE}
          value={byDate && t(byDate)}
        >
          {t("By Date")}
        </MenuItemArrow>
      </MenuItemGroup>
    </>
  );
};

export default EventsFilter;
