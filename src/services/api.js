import axios from "axios";

let data = sessionStorage.getItem("data");
let token = JSON.parse(data);

const api = axios.create({
  baseURL: "",
  
});

export default api;
