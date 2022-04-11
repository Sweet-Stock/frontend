import axios from "axios";

let data = sessionStorage.getItem("data");
let token = JSON.parse(data);

const api = axios.create(
  token == null
    ? {
        baseURL: "",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    : {
        baseURL: "",
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token.uuid}`,
        },
      }
);

export default api;
