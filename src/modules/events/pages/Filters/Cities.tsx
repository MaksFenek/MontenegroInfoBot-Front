import React from "react";
import { useSelector } from "react-redux";
import { CITIES } from "../../../common/constants/lists";
import { ListForm } from "../../../common/forms/ListForm";
import { useBackButton } from "../../../common/hooks/useBackButton";
import { useDispatchActionFn } from "../../../common/hooks/useDispatchActionFn";
import { selectFilters } from "../../reducers/filter/filter.selector";
import { setFilter } from "../../reducers/filter/filter.slice";

export const Cities = () => {
  useBackButton(true);
  const { city } = useSelector(selectFilters);

  const onChange = useDispatchActionFn<string>((value) =>
    setFilter({ key: "city", value: city === value ? undefined : value })
  );
  return (
    <ListForm
      list={CITIES}
      checkList={city ? [city] : []}
      onChange={onChange}
    />
  );
};

export default Cities;
