import api from "@/Configs/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useSendOTP = () => {
  return useMutation({
    mutationFn: (phone: string) => {
      return api
        .post("/register", { phone })
        .then((res) => toast.success("کد باموفقیت ارسال شد."))
        .catch((error) =>
          toast.error(
            error.response.data.messages ||
              "کد ارسال نشد لطفا دقایقی دیگر دوباره تلاش کنید."
          )
        );
    },
  });
};

export default useSendOTP;
