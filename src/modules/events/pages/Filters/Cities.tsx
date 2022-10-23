import React from "react";
import { useSelector } from "react-redux";
import { ListForm } from "../../../common/forms/ListForm";
import { useBackButton } from "../../../common/hooks/useBackButton";
import { useDispatchActionFn } from "../../../common/hooks/useDispatchActionFn";
import { selectFilters } from "../../reducers/filter/filter.selector";
import { setFilter } from "../../reducers/filter/filter.slice";

const CITIES = ["Tivat", "Budva", "Podgorica", "Bar"];

export const Cities = () => {
  useBackButton(true);
  const { city } = useSelector(selectFilters);

  const onChange = useDispatchActionFn<string>((value) =>
    setFilter({ key: "city", value: city === value ? undefined : value })
  );
  return (
    <ListForm
      list={CITIES.sort()}
      checkList={city ? [city] : []}
      onChange={onChange}
    />
  );
};

export default Cities;
