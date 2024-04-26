import api from "@/Configs/api";
import { useMutation } from "@tanstack/react-query";

interface Data  {
    otpcode:string,
    phone:string
}

const useCheckOTP = () => {
  return useMutation({
    mutationFn: (data:Data) => {
      return api.post("/doVerify",data);
    },
  });
};

export default useCheckOTP;
