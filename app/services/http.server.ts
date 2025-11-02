import axios from "axios";

export const serverApi = axios.create({
  baseURL: process.env.API_URL || "https://localhost:8000/api",
});

serverApi.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("SERVER API ERROR", err?.response?.data);
    throw err;
  }
);
