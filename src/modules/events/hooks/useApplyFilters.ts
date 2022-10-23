import _ from "lodash";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectFilters } from "../reducers/filter/filter.selector";

export const useApplyFilters = () => {
  const filters = useSelector(selectFilters);
  const [, setSearchParams] = useSearchParams();

  useLayoutEffect(() => {
    const result: Record<string, string> = {};
    _(filters)
      .keys()
      .forEach((key) => {
        const filterItem = filters[key as keyof typeof filters];

        if (typeof filterItem === "object") {
          _(filterItem)
            .entries()
            .forEach(([itemKey, itemValue]) => {
              if (itemValue) result[itemKey] = itemValue;
            });
        } else {
          if (filterItem) result[key] = filterItem as string;
        }
      });

    setSearchParams(result as any);
  }, [filters]);
};
