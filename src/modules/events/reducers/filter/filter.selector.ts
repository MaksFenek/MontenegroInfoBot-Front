import { createSelector } from "reselect";
import { RootState } from "../../../../store";

export const selectFilters = createSelector(
  (state: RootState) => state.filter,
  (filter) => filter
);
