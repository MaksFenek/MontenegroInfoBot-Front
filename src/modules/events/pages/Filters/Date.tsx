import React from "react";
import { useSelector } from "react-redux";
import { FromToForm } from "../../../common/forms/FromToForm";
import { useBackButton } from "../../../common/hooks/useBackButton";
import { useDispatchActionFn } from "../../../common/hooks/useDispatchActionFn";
import { selectFilters } from "../../reducers/filter/filter.selector";
import { setFilter } from "../../reducers/filter/filter.slice";
import { DateType } from "../../reducers/filter/filter.types";

export const Date = () => {
  useBackButton(true);
  const { date } = useSelector(selectFilters);

  const onChange = useDispatchActionFn<DateType>((value) =>
    setFilter({ key: "date", value })
  );
  return <FromToForm date={date} onChange={onChange} />;
};

export default Date;
