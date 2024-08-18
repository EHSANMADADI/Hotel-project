import { useQuery } from "@tanstack/react-query";
import api from "@/Configs/api";
import { MenuType } from "../Menu/MenuItemType";

const UseMenuItem = (itemId:string) =>
  useQuery({
    queryKey: ["menuItems",itemId],
    queryFn: async () => (await api.get<MenuType>(`/menu-items/${itemId}`)).data,
    gcTime: 10 * 1000,
  });

export default UseMenuItem;