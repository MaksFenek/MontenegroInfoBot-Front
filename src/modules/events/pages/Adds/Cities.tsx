import React, { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { CITIES } from "../../../common/constants/lists";
import { AddEventDataType } from "../../../common/constants/types";
import { ListForm } from "../../../common/forms/ListForm";
import { useBackButton } from "../../../common/hooks/useBackButton";

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
