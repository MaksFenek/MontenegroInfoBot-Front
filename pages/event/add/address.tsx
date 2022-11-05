import React, { useEffect } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { AddEventDataType } from "ui/common/types";
import { AddressForm } from "ui/common/forms/AddressForm";
import { useBackButton } from "lib/hooks/useBackButton";
import { useMainButton } from "lib/hooks/useMainButton";

export const Address = () => {
  const { t } = useTranslation();
  useBackButton(true);
  const {
    register,
    formState: { errors },
  } = useFormContext<AddEventDataType>();

  return (
    <AddressForm
      {...register("address", {
        maxLength: {
          value: 100,
          message: t("max length", { name: t("Address"), max: 100 }),
        },
      })}
      error={errors.address?.message}
    />
  );
};

export default Address;
