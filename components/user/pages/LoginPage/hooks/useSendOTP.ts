import api from "@/Configs/api";
import { useMutation } from "@tanstack/react-query";

const useSendOTP = () => {
  return useMutation({
    mutationFn: (phone: string) => {
      return api.post("/register", { phone }
      ).then(r=>console.log(r)
      ).catch(er=>console.log(er)
      );
    },
    onSuccess: () => {
      console.log("SENT OTP CODE");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useSendOTP;
