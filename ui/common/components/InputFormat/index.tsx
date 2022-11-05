import React from "react";
import { PatternFormat } from "react-number-format";

interface InputFormatProps extends React.ComponentProps<typeof PatternFormat> {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const InputFormat = React.forwardRef<
  typeof PatternFormat,
  InputFormatProps
>(function InputFormat({ onChange, name, ...props }, ref) {
  return (
    <PatternFormat
      {...props}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name,
            value: values.value,
          },
        });
      }}
      valueIsNumericString
    />
  );
});

export * from "./InputDate";
export * from "./InputTime";
