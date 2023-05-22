import data from "@/data.json";

export const filterLocations = (city, guestNumber) => {
  const stays = data;

  if (city && guestNumber) {
    return stays.filter(
      (loc) =>
        loc.city.toLowerCase().includes(city) && loc.maxGuests <= guestNumber
    );
  }
  if (city) {
    return stays.filter((loc) => loc.city.toLowerCase().includes(city));
  }
  if (guestNumber) {
    return stays.filter((loc) => loc.maxGuests <= guestNumber);
  }
  return;
};
