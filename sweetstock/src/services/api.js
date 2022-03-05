import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  method: 'GET',
  headers: {'Access-Control-Allow-Origin': '*'}
});

export default api;