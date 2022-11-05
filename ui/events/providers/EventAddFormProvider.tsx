import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AddEventDataType } from "../../common/types";

export const EventAddFormProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const form = useForm<AddEventDataType>({
    mode: "onChange",
  });
  return <FormProvider {...form}>{children}</FormProvider>;
};

export default EventAddFormProvider;
