import React, { useCallback } from "react";
import { useParams } from "react-router-dom";

const Cities = React.lazy(() => import("./Cities"));
const Date = React.lazy(() => import("./Date"));
const Address = React.lazy(() => import("./Address"));

export const AddsForms = () => {
  const { type } = useParams();

  const Form = useCallback(() => {
    switch (type) {
      case "city":
        return <Cities />;
      case "date":
        return <Date />;
      case "address":
        return <Address />;

      default:
        return null;
    }
  }, [type]);

  return <Form />;
};

export default AddsForms;
