import { useEffect } from "react";
import { useTelegramService } from "services/telegramAdapters/telegramAdapter";

export const useConfirmPopup = (trigger: boolean) => {
  const { tg } = useTelegramService();
  useEffect(() => {
    if (trigger) {
      tg?.WebApp.enableClosingConfirmation();
    }
    return () => {
      tg?.WebApp.disableClosingConfirmation();
    };
  }, [trigger, tg]);
};
