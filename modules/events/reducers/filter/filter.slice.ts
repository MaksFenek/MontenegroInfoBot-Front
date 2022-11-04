import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "./filter.types";

const initialState: FilterState = {
  city: undefined,
  date: undefined,
  byDate: undefined,
  byGroup: undefined,
  showArchived: undefined,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFiltersParams: (state, action: PayloadAction<FilterState>) => {
      state = action.payload;
    },
    setFilter: <Key extends keyof FilterState = keyof FilterState>(
      state: FilterState,
      action: PayloadAction<{ key: Key; value: FilterState[Key] }>
    ) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFiltersParams, setFilter } = filterSlice.actions;

export default filterSlice.reducer;
