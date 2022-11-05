import React from "react";
import { useSelector } from "react-redux";
import { FromToForm } from "ui/common/forms/FromToForm";
import { useBackButton } from "lib/hooks/useBackButton";
import { useDispatchActionFn } from "lib/hooks/useDispatchActionFn";
import { selectFilters } from "store/filter/filter.selector";
import { setFilter } from "store/filter/filter.slice";
import { DateType } from "store/filter/filter.types";

export const Date = () => {
  useBackButton(true);
  const { date } = useSelector(selectFilters);

  const onChange = useDispatchActionFn<DateType>((value) =>
    setFilter({ key: "date", value })
  );
  return <FromToForm date={date} onChange={onChange} />;
};

export default Date;
