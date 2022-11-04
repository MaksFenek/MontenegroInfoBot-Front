import { useMemo } from "react";

export const useTelegram = () => {
  const telegram = useMemo(
    () => (typeof Telegram !== "undefined" ? Telegram : undefined),
    []
  );

  return telegram;
};
