import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const checkValidDate = (val?: string) => {
  if (val) {
    return dayjs(val, "DDMMYYYY", true).isValid() ? true : "Invalid Date";
  }
  return true;
};

export const checkFromToValid = (
  val1?: string,
  val2?: string,
  type?: "from" | "to"
) => {
  let val1Date = dayjs(val1, "DDMMYYYY", true);
  let val2Date = dayjs(val2, "DDMMYYYY", true);
  if (val1Date.isValid() && val2Date.isValid()) {
    if (type === "to") [val1Date, val2Date] = [val2Date, val1Date];

    return val1Date.isBefore(val2Date) ? true : "Invalid range";
  }
  return true;
};
