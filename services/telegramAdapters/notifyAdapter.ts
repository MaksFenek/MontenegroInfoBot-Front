import { NotificationService } from "application/ports";
import { useCallback } from "react";

export const useNotifyService = (): NotificationService => {
  const notify = useCallback(() => {}, []);

  const notifyError = useCallback(() => {}, []);

  return {
    notify,
    notifyError,
  };
};
