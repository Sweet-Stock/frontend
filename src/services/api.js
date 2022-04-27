import axios from "axios";

const env = "dev";

const api = axios.create(
  env === "dev"
    ? {
        baseURL: "http://localhost:8080/v1/sweet-stock",
      }
    : {
        baseURL:
          "https://sweet-stock-api-1650235559435.azurewebsites.net/v1/sweet-stock",
      }
);

export default api;
