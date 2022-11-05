import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { ListForm } from "ui/common/forms/ListForm";
import { useBackButton } from "lib/hooks/useBackButton";
import { useDispatchActionFn } from "lib/hooks/useDispatchActionFn";
import { selectFilters } from "store/filter/filter.selector";
import { setFilter } from "store/filter/filter.slice";
import { INCREASE_DECREASE_TYPE } from "store/filter/filter.types";

export const Dates = () => {
  useBackButton(true);
  const { byDate } = useSelector(selectFilters);

  const onChange = useDispatchActionFn<string>((value) =>
    setFilter({
      key: "byDate",
      value:
        byDate === value
          ? undefined
          : _.find(INCREASE_DECREASE_TYPE, (item) => item.value === value)
              ?.value,
    })
  );
  return (
    <ListForm
      list={_.map(INCREASE_DECREASE_TYPE, (item) => item.value)}
      checkList={byDate ? [byDate] : []}
      onChange={onChange}
    />
  );
};

export default Dates;
