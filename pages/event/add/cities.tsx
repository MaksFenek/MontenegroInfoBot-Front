import React, { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { CITIES } from "lib/constants/cities";
import { AddEventDataType } from "ui/common/types";
import { ListForm } from "ui/common/forms/ListForm";
import { useBackButton } from "lib/hooks/useBackButton";

export const Cities = () => {
  useBackButton(true);
  const { setValue, watch, trigger } = useFormContext<AddEventDataType>();
  const onChange = useCallback((city: string) => {
    setValue("city", city);
    trigger("city");
  }, []);

  return (
    <ListForm list={CITIES} checkList={[watch("city")]} onChange={onChange} />
  );
};

export default Cities;
