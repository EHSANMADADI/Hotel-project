import axios from'axios'
import { getCookie } from "@/utils/cookie";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use((req) => {
  req.headers["Authorization"] = getCookie("accessToken");
  return req;
});

export default api;
