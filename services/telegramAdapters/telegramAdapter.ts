import { TelegramService } from "application/ports";
import { useMemo } from "react";

export const useTelegramService = (): TelegramService => {
  const tg = useMemo(
    () => (typeof Telegram !== "undefined" ? Telegram : undefined),
    []
  );

  return {
    tg,
  };
};
