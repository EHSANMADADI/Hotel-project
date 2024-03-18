import { useState } from "react";

const useAuth = () => {
  const [forgotPass, setForgotPass] = useState(false);

  return { forgotPass, setForgotPass };
};

export default useAuth;
