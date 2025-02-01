import axios from'axios'
import { getCookie } from "@/utils/cookie";

const api = axios.create({

  baseURL: "https://87.107.54.231/api",

  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use((req) => {
  req.headers["Authorization"] = getCookie("accessToken");
  return req;
});

export default api;
