import React from "react";
import { ListForm } from "../../../common/forms/ListForm";
import { useBackButton } from "../../../common/hooks/useBackButton";

export const Guests = () => {
  useBackButton(true);
  return (
    <ListForm
      list={["By increase", "By decrease"]}
      checkList={["By decrease"]}
    />
  );
};

export default Guests;
