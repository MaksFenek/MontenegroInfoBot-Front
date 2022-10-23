import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useBackButton = () => {
  const { show, hide, onClick, offClick } = Telegram.WebApp.BackButton;
  const navigate = useNavigate();

  const onBack = useCallback(() => navigate(-1), []);

  useEffect(() => {
    show();
    onClick(onBack);
    return () => {
      hide();
      offClick(onBack);
    };
  }, []);
};
