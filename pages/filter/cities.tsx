import React from "react";
import { useSelector } from "react-redux";
import { CITIES } from "../../lib/constants/cities";
import { ListForm } from "../../ui/common/forms/ListForm";
import { useBackButton } from "../../lib/hooks/useBackButton";
import { useDispatchActionFn } from "../../lib/hooks/useDispatchActionFn";
import { selectFilters } from "../../store/filter/filter.selector";
import { setFilter } from "../../store/filter/filter.slice";

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
