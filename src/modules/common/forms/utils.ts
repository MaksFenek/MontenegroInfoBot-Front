import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const checkValidDate = (val?: string) => {
  if (val) {
    return dayjs(val, "DDMMYYYY", true).isValid() ? true : "Invalid Date";
  }
  return true;
};

export const checkValidTime = (val?: string) => {
  if (val) {
    return dayjs(val, "HHmm", true).isValid() ? true : "Invalid Time";
  }
  return true;
};

export const checkDateIsAfterNow = (val?: string) => {
  if (val) {
    return dayjs(val, "DDMMYYYY", true).isAfter(dayjs())
      ? true
      : "Date must be no earlier than tomorrow";
  }
  return true;
};

export const checkDateIsBeforeOneYear = (val?: string) => {
  if (val) {
    return dayjs(val, "DDMMYYYY", true).isBefore(
      dayjs(Date.now() + 86400000 * 365)
    )
      ? true
      : "Date must be no later than one year";
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

    return val1Date.isBefore(val2Date) ? true : "Invalid Range";
  }
  return true;
};
