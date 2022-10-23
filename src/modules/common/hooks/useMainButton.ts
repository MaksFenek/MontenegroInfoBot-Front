import { useCallback, useEffect } from "react";

const MainButton = Telegram.WebApp.MainButton;

export const useMainButton = (text: string, cb?: Function) => {
  useEffect(() => {
    MainButton.setText(text);
    MainButton.show();

    return () => {
      MainButton.hide();
    };
  }, [text]);

  useEffect(() => {
    if (cb) {
      MainButton.onClick(cb);
      return () => {
        MainButton.offClick(cb);
      };
    }
  }, [cb]);

  const disable = useCallback(() => {
    MainButton.disable();
    MainButton.setParams({
      color: Telegram.WebApp.themeParams.hint_color,
      text_color: Telegram.WebApp.themeParams.bg_color,
    });
  }, []);

  const enable = useCallback(() => {
    MainButton.enable();
    MainButton.setParams({
      color: Telegram.WebApp.themeParams.button_color,
      text_color: Telegram.WebApp.themeParams.button_text_color,
    });
  }, []);

  return { disable, enable, MainButton };
};
