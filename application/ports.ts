import { EventModel } from "domain/event";
import { TelegramWebApps } from "global";

export interface EventService {
  tryCreate(event: EventModel): Promise<EventModel>;
  tryUpdate(event: EventModel): Promise<EventModel>;
}

export interface NotificationService {
  notify(message: TextType): void;
  notifyError(message: TextType): void;
}

export interface TelegramService {
  tg?: TelegramWebApps.SDK;
}
