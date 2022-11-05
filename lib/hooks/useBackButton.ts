import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useTelegramService } from "services/telegramAdapters/telegramAdapter";

export const useBackButton = (showBack?: boolean) => {
  const { tg } = useTelegramService();
  const { show, hide, onClick, offClick } = tg?.WebApp.BackButton || {};
  const { back } = useRouter();

  useEffect(() => {
    if (showBack) {
      show && show();
    } else {
      hide && hide();
    }

    onClick && onClick(back);
    return () => {
      offClick && offClick(back);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBack, tg]);
};
