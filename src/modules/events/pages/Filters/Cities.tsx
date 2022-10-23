import React from "react";
import { ListForm } from "../../../common/forms/ListForm";
import { useBackButton } from "../../../common/hooks/useBackButton";

export const Cities = () => {
  useBackButton(true);
  return (
    <ListForm list={["Tivat", "Budva", "Podgorica"]} checkList={["Tivat"]} />
  );
};

export default Cities;
