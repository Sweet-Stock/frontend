import axios from "axios";

const api = axios.create({
  baseURL: "localhost:9001",
});

export default api;