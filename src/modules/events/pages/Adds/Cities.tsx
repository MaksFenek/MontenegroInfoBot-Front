import React from "react";
import { CITIES } from "../../../common/constants/lists";
import { ListForm } from "../../../common/forms/ListForm";
import { useBackButton } from "../../../common/hooks/useBackButton";

export const Cities = () => {
  useBackButton(true);
  return <ListForm list={CITIES} checkList={["Tivat"]} />;
};

export default Cities;
