import axios from "axios";
import { BASE_API_URL, OPENAI_API_KEY, OPENAI_API_URL } from "@/config";

const REQ_TIMEOUT = 10000;

export const apiClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: REQ_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const openaiClient = axios.create({
  baseURL: OPENAI_API_URL,
  timeout: REQ_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  },
});
