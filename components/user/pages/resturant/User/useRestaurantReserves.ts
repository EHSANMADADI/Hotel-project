import api from "@/Configs/api";
import { RestaurantReserves } from "@/types/Reserves";
import { useQuery } from "@tanstack/react-query";

const useRestaurantReserves = () => {
  return useQuery({
    queryKey: ["RestaurantReserves"],
    queryFn: async () =>
      (await api.get<RestaurantReserves>("/my-reserves")).data
        .restaurantReserves,
  });
};

export default useRestaurantReserves;
