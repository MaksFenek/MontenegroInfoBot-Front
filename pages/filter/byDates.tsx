import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { ListForm } from "modules/common/forms/ListForm";
import { useBackButton } from "modules/common/hooks/useBackButton";
import { useDispatchActionFn } from "modules/common/hooks/useDispatchActionFn";
import { selectFilters } from "modules/events/reducers/filter/filter.selector";
import { setFilter } from "modules/events/reducers/filter/filter.slice";
import { INCREASE_DECREASE_TYPE } from "modules/events/reducers/filter/filter.types";

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
