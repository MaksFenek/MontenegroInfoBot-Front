export interface FilterState {
  city?: string;
  date?: DateType;
  byDate?: IncreaseAndDecreaseType;
  byGroup?: IncreaseAndDecreaseType;
  showArchived?: boolean;
}

export interface DateType {
  from: string;
  to: string;
}

export type IncreaseAndDecreaseType = "increase" | "decrease";

export const INCREASE_DECREASE_TYPE: Record<
  IncreaseAndDecreaseType,
  { name: string; value: string }
> = {
  increase: { name: "increase", value: "By increase" },
  decrease: { name: "decrease", value: "By decrease" },
};
