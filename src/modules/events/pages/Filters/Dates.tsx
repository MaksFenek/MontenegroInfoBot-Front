import React from "react";
import { ListForm } from "../../../common/forms/ListForm";
import { useBackButton } from "../../../common/hooks/useBackButton";

export const Dates = () => {
  useBackButton(true);
  return (
    <ListForm
      list={["By increase", "By Decrease"]}
      checkList={["By increase"]}
    />
  );
};

export default Dates;
