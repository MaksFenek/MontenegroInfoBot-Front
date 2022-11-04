import React from "react";
import { InputFormat } from "./index";

export const InputTime = React.forwardRef<typeof InputFormat, any>(
  (props, ref) => {
    return (
      <InputFormat
        {...props}
        ref={ref}
        format="##:##"
        placeholder="HH:mm"
        mask={["H", "H", "m", "m"]}
      />
    );
  }
);
