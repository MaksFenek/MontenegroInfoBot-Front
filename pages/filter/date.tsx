import React from "react";
import { useSelector } from "react-redux";
import { FromToForm } from "modules/common/forms/FromToForm";
import { useBackButton } from "modules/common/hooks/useBackButton";
import { useDispatchActionFn } from "modules/common/hooks/useDispatchActionFn";
import { selectFilters } from "modules/events/reducers/filter/filter.selector";
import { setFilter } from "modules/events/reducers/filter/filter.slice";
import { DateType } from "modules/events/reducers/filter/filter.types";

export const Date = () => {
  useBackButton(true);
  const { date } = useSelector(selectFilters);

  const onChange = useDispatchActionFn<DateType>((value) =>
    setFilter({ key: "date", value })
  );
  return <FromToForm date={date} onChange={onChange} />;
};

export default Date;
