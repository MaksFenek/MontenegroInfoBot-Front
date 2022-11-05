import React from "react";
import { InputFormat } from "./index";

export const InputDate = React.forwardRef<typeof InputFormat, any>(
  function InputDate(props, ref) {
    return (
      <InputFormat
        {...props}
        ref={ref}
        format="##/##/####"
        placeholder="DD/MM/YYYY"
        mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
      />
    );
  }
);
