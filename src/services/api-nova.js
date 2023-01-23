import axios from 'axios'

const env = process.env.REACT_APP_NOVA_API_KEY

const apiNova = axios.create({
  baseURL: env ?? 'http://52.3.125.206:8080/api/v1/sweet-stock/'
})

export default apiNova
