import React from "react";
import { Search } from "../../../common/components/Search/Search";
import { useBackButton } from "../../../common/hooks/useBackButton";

export const Events = () => {
  useBackButton();
  return (
    <div>
      <Search />
    </div>
  );
};

export default Events;
