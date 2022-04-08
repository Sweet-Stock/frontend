import axios from "axios";

const api = axios.create({
  baseURL: "",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
