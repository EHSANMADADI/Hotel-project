import api from "@/Configs/api";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

export interface CafeReserves {
  check_in_hour: string;
  check_out_hour: string;
  date: string;
  id: number;
  status: string;
  coffee_shop_table_id: number;
  number_of_guest: string;
  table: {
    id: number;
    number_of_table: string;
  };
}

const useReserves = () => {
  return useQuery({
    queryFn: async () => {
      try {
        return (await api.get<CafeReserves[]>("/coffee-shop/reserves")).data;
      } catch {
        toast.error("دریافت اطلاعات رزروها با خطا مواجه شد.");
      }
    },
    queryKey: ["AllCafeReserves"],
    gcTime: 15 * 1000,
  });
};

export default useReserves;
