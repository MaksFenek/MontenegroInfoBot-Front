import { useEffect } from "react";
import { useTelegram } from "./useTelegram";

export const useConfirmPopup = (trigger: boolean) => {
  const tg = useTelegram();
  useEffect(() => {
    if (trigger) {
      tg?.WebApp.enableClosingConfirmation();
    }
    return () => {
      tg?.WebApp.disableClosingConfirmation();
    };
  }, [trigger, tg]);
};
