import { useEffect } from "react";

export const useConfirmPopup = (trigger: boolean) => {
  useEffect(() => {
    if (trigger) {
      Telegram.WebApp.enableClosingConfirmation();
    }
    return () => {
      Telegram.WebApp.disableClosingConfirmation();
    };
  }, [trigger]);
};
