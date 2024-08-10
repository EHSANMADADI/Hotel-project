import api from "@/Configs/api";
import { useQuery } from "@tanstack/react-query";
import { Reserves } from "@/types/Reserves";

const useCoffeeShopReserves = () =>
  useQuery({
    queryKey: ["cafeReserves"],
    queryFn: () =>
      api
        .get<Reserves>("/my-reserves")
        .then((_data) => _data.data.coffeeShopReserves),
  });

export default useCoffeeShopReserves;
