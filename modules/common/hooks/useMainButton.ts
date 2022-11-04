import { useCallback, useEffect, useMemo } from "react";
import { useTelegram } from "./useTelegram";

export const useMainButton = (text: string, cb?: Function) => {
  const tg = useTelegram();

  const MainButton = useMemo(() => tg?.WebApp.MainButton, [tg]);

  useEffect(() => {
    MainButton?.setText(text);
    MainButton?.show();

    return () => {
      MainButton?.hide();
    };
  }, [text, MainButton]);

  useEffect(() => {
    if (cb) {
      MainButton?.onClick(cb);
      return () => {
        MainButton?.offClick(cb);
      };
    }
  }, [cb, MainButton]);

  const disable = useCallback(() => {
    MainButton?.disable();
    MainButton?.setParams({
      color: tg?.WebApp.themeParams.hint_color,
      text_color: tg?.WebApp.themeParams.bg_color,
    });
  }, [tg, MainButton]);

  const enable = useCallback(() => {
    MainButton?.enable();
    MainButton?.setParams({
      color: tg?.WebApp.themeParams.button_color,
      text_color: tg?.WebApp.themeParams.button_text_color,
    });
  }, [tg, MainButton]);

  return { disable, enable, MainButton };
};
