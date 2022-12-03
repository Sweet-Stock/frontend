import axios from 'axios'

const env = process.env.REACT_APP_NOVA_API_KEY

const apiNova = axios.create({
  baseURL: env ?? 'https://sweetstore-backend.servehttp.com/api/v1/sweet-stock/'
})

export default apiNova
