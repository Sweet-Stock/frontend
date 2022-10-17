import axios from 'axios'

const env = process.env.REACT_APP_API_KEY

const api = axios.create({
  baseURL: env ?? 'http://54.225.132.238/v1/sweet-stock/'
})

export default api
