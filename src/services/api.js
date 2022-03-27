import axios from "axios";

const api = axios.create({
  baseURL: "",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Accept, Content-Type, X-Request-With, X-Requested-With, X-Requested-By, X-HTTP-Method-Override",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default api;
