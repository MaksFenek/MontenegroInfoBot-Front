import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { AddEventDataType } from "../../common/constants/types";

export const EventAddFormProvider = () => {
  const form = useForm<AddEventDataType>({
    mode: "onChange",
  });
  return (
    <FormProvider {...form}>
      <Outlet />
    </FormProvider>
  );
};

export default EventAddFormProvider;
