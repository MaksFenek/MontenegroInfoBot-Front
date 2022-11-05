import { EventModel } from "domain/event";
import { useCallback } from "react";
import { useEventService } from "services/eventAdapters/createAdapter";
import { useNotifyService } from "services/telegramAdapters/notifyAdapter";

export const useCreateEvent = () => {
  const eventing = useEventService();
  const notifier = useNotifyService();

  const createEvent = useCallback(
    async (event: EventModel): Promise<EventModel | undefined> => {
      try {
        const created = await eventing.tryCreate(event);

        if (!created) {
          throw new Error("Something went wrong.");
        }

        notifier.notify("Event successfully created");

        return created;
      } catch (error: any) {
        console.error(error);
        notifier.notifyError(error);
      }
    },
    [eventing, notifier]
  );

  return {
    createEvent,
  };
};
