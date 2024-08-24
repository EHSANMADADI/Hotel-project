import { useQuery } from "@tanstack/react-query";
import api from "@/Configs/api";
import { MenuType } from "../Menu/MenuItemType";
const UseMenu = () =>
  useQuery({
    queryKey: ["menuItems"],
    queryFn: async () => (await api.get<MenuType[]>("/menu-items")).data,
    gcTime: 10 * 1000,
  });

export default UseMenu;
