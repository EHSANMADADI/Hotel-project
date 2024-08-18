import api from "@/Configs/api";
import useRole from "@/store/useRole";
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
  const { changeRole } = useRole();
  return useMutation({
    mutationFn: (data: Data) => {
      return api
        .post("/doVerify", data)
        .then((res) => {
          // console.log(res.data.user.phone);
          res.data.user.roles.name === "client"
            ? changeRole("Client")
            : changeRole("Admin");
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
