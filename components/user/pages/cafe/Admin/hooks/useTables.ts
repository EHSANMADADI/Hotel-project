import { useQuery } from "@tanstack/react-query";
import api from "@/Configs/api";

const useTables = () =>
  useQuery({
    queryKey: ["tables"],
    queryFn: async () => (await api.get("/coffee-shop/tables")).data,
    gcTime: 10 * 1000,
  });

export default useTables;
