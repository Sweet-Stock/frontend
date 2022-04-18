import axios from "axios";

const api = axios.create({
  baseURL: "https://sweet-stock-api-1650235559435.azurewebsites.net/v1/sweet-stock",
  
});

export default api;
