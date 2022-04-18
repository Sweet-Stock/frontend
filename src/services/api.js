import axios from "axios";

let data = sessionStorage.getItem("data");
let token = JSON.parse(data);

const api = axios.create({
  baseURL: "https://sweet-stock-api-1650235559435.azurewebsites.net/v1/sweet-stock",
  
});

export default api;
