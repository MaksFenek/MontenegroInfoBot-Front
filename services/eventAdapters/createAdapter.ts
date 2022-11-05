import { EventService } from "application/ports";
import { useCallback } from "react";

export const useEventService = (): EventService => {
  const tryCreate = useCallback(() => null, []) as any;

  const tryUpdate = useCallback(() => null, []) as any;

  return {
    tryCreate,
    tryUpdate,
  };
};
