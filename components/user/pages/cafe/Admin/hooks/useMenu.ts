import { useQuery } from "@tanstack/react-query";
import api from "@/Configs/api";

const UseMenu = () =>
  useQuery({
    queryKey: ["menuItems"],
    queryFn: async () => (await api.get("/menu-items")).data,
    gcTime: 10 * 1000,
  });

export default UseMenu;
