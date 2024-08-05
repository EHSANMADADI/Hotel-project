import api from "@/Configs/api";
import { setCookie } from "@/utils/cookie";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface Data {
  otpcode: string;
  phone: string;
}

const useCheckOTP = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: (data: Data) => {
      return api
        .post("/doVerify", data)
        .then((res) => {
          setCookie(res?.data.token);
          toast.success("با موفقیت وارد شدید.", { duration: 3000 });
          push("/");
        })
        .catch((error) => {
          toast.error(
            error?.response.data.messages || "کد واردشده نامعتبر است."
          );
        });
    },
  });
};

export default useCheckOTP;
