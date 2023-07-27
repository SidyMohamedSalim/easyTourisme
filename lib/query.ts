export const queryKeys = {
  all: (value: string) => [value],
  byId: (value: string, id: string) => [value, id],
  favoritesName: "favorites",
  BookingName: "bookings",
  ToursName: "tours",
};
