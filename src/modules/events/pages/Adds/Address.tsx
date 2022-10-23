import React from "react";
import { AddressForm } from "../../../common/forms/AddressForm";
import { useBackButton } from "../../../common/hooks/useBackButton";

export const Address = () => {
  useBackButton(true);
  return <AddressForm />;
};

export default Address;
