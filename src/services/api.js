import axios from 'axios'

const env = process.env.REACT_APP_API_KEY

const api = axios.create({
  baseURL: env ?? 'http://52.44.88.34:8080/v1/sweet-stock/'
})

export default api
