import React from "react";
import { useSelector } from "react-redux";
import { CITIES } from "../../modules/common/constants/lists";
import { ListForm } from "../../modules/common/forms/ListForm";
import { useBackButton } from "../../modules/common/hooks/useBackButton";
import { useDispatchActionFn } from "../../modules/common/hooks/useDispatchActionFn";
import { selectFilters } from "../../modules/events/reducers/filter/filter.selector";
import { setFilter } from "../../modules/events/reducers/filter/filter.slice";

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
