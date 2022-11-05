import { useMemo } from "react";

export const useWindow = () => {
  const globalWindow = useMemo(
    () => (typeof window !== "undefined" ? window : undefined),
    []
  );

  return globalWindow;
};
