import api from "@/Configs/api";
import { useQuery } from "@tanstack/react-query";

const useTable = (tableId:string)=>{   
    return useQuery({
        queryKey: ["tables", tableId],
        queryFn: async () => (await api.get(`/coffee-shop/tables/${tableId}`)).data,
        gcTime: 10 * 1000,
    });
     
}
export default useTable