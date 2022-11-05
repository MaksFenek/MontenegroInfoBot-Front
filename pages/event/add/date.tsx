import React from "react";
import { useFormContext } from "react-hook-form";
import { AddEventDataType } from "ui/common/types";
import { DateForm } from "ui/common/forms/DateForm";

export const Date = () => {
  const { setValue, watch, trigger } = useFormContext<AddEventDataType>();
  return (
    <DateForm
      onChange={(value) => {
        setValue("date", value);
        trigger("date");
      }}
      value={watch("date")}
    />
  );
};

export default Date;
