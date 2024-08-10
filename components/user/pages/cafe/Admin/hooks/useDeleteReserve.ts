import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/Configs/api";
import toast from "react-hot-toast";

const useDeleteReserve = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (reserveId: number) => {
      try {
        await api.delete(`/coffee-shop/reserves/${reserveId}`);
        toast.success("رزرو با موفقیت لغو شد");
        queryClient.invalidateQueries({ queryKey: ["AllCafeReserves"] });
      } catch {
        toast.error("رزرو لغو نشد.");
      }
    },
  });
};

export default useDeleteReserve;
