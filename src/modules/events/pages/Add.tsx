import React from "react";
import { useBackButton } from "../../common/hooks/useBackButton";

export const AddEvent = () => {
  useBackButton(true);
  return <div>Add</div>;
};

export default AddEvent;
