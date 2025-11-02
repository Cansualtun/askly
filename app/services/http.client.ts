import axios from "axios";

export const clientApi = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTA3NTUyZjAxOTlmM2IxNjU5OGRjNzgiLCJpYXQiOjE3NjIwOTYzODUsImV4cCI6MTc2MjcwMTE4NX0.I0ucV_jAwXZ4a4CA2u3GntmkK4ybc0tAAowVAq_M-Z8",
  },
});

clientApi.interceptors.request.use((config) => {
  const match = document.cookie.match(/token=([^;]+)/);
  const token = match?.[1];

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
