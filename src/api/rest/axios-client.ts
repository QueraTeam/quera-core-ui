import axios from "axios";
import { getBrowserCookie } from "../../utils/cookie";

export const axiosClient = axios.create({
  // baseURL: "http://localhost:8000",
  headers: {
    "x-csrftoken": getBrowserCookie("csrf_token") || "",
  },
});
