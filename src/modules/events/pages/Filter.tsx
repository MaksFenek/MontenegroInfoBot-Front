import { Divider } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { EVENTS_FILTER_PAGE } from "../../../routes/constants";
import { MenuItemArrow } from "../../common/components/Menu/MenuItemArrow";
import { MenuItemCheckbox } from "../../common/components/Menu/MenuItemCheckbox";
import { MenuItemGroup } from "../../common/components/Menu/MenuItemGroup";
import { useBackButton } from "../../common/hooks/useBackButton";
import { useDispatchActionFn } from "../../common/hooks/useDispatchActionFn";
import { selectFilters } from "../reducers/filter/filter.selector";
import { setFilter } from "../reducers/filter/filter.slice";

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
        <MenuItemArrow
          to={`${EVENTS_FILTER_PAGE}/city`}
          value={city && t(city)}
        >
          {t("City")}
        </MenuItemArrow>
        <Divider />
        <MenuItemArrow to={`${EVENTS_FILTER_PAGE}/date`} value={dateRange()}>
          {t("Date")}
        </MenuItemArrow>
      </MenuItemGroup>
      <MenuItemGroup title={t("Sorting")}>
        <MenuItemArrow
          to={`${EVENTS_FILTER_PAGE}/byDate`}
          value={byDate && t(byDate)}
        >
          {t("By Date")}
        </MenuItemArrow>
        <Divider />
        <MenuItemArrow
          to={`${EVENTS_FILTER_PAGE}/byGuest`}
          value={byGroup && t(byGroup)}
        >
          {t("By Guests")}
        </MenuItemArrow>
      </MenuItemGroup>
      <MenuItemGroup title={t("Additional")}>
        <MenuItemCheckbox checked={showArchived || false} onClick={onSwitch}>
          {t("Show Archived")}
        </MenuItemCheckbox>
      </MenuItemGroup>
    </>
  );
};

export default EventsFilter;
