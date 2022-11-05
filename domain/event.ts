export interface EventModel {
  _id: ID;
  image: ImageType;
  date: DateType;
  title: TextType;
  city: CityType;
  address: AddressType;
  description: TextType;
  user: UserType;
}

export type ShortedEvent = Omit<EventModel, "description" | "user" | "address">;

export const getEventPreview = (event: EventModel): ShortedEvent => {
  const { description, user, address, ...rest } = event;
  return rest;
};
