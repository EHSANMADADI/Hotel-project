import { useQuery } from "@tanstack/react-query";
import api from "@/Configs/api";

const useTables = () =>
  useQuery({
    queryKey: ["tables"],
    queryFn: async () => (await api.get("/tables")).data,
    gcTime: 3 * 1000,
  });

export default useTables;
