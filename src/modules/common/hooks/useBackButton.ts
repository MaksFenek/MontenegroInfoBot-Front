import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useBackButton = (showBack?: boolean) => {
  const { show, hide, onClick, offClick } = Telegram.WebApp.BackButton;
  const navigate = useNavigate();

  const onBack = useCallback(() => navigate(-1), []);

  useEffect(() => {
    showBack ? show() : hide();

    onClick(onBack);
    return () => {
      offClick(onBack);
    };
  }, [showBack]);
};
