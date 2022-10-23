import React, { useCallback } from "react";
import { useParams } from "react-router-dom";

const Cities = React.lazy(() => import("./Cities"));
const Date = React.lazy(() => import("./Date"));
const Dates = React.lazy(() => import("./Dates"));
const Guests = React.lazy(() => import("./Guests"));

export const FilterForms = () => {
  const { type } = useParams();

  const Form = useCallback(() => {
    switch (type) {
      case "city":
        return <Cities />;
      case "date":
        return <Date />;
      case "byDate":
        return <Dates />;
      case "byGuest":
        return <Guests />;

      default:
        return null;
    }
  }, [type]);

  return <Form />;
};

export default FilterForms;
