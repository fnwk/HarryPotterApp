import axios from "axios";
import { BASE_API_URL } from "@/config";

const REQ_TIMEOUT = 10000;

export const apiClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: REQ_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});
