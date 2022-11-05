import { createSelector } from "reselect";
import { RootState } from "..";

export const selectFilters = createSelector(
  (state: RootState) => state.filter,
  (filter) => filter
);
