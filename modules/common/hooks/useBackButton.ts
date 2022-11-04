import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useTelegram } from "./useTelegram";

export const useBackButton = (showBack?: boolean, url?: string) => {
  const tg = useTelegram();
  const { show, hide, onClick, offClick } = tg?.WebApp.BackButton || {};
  const { back } = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps

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
