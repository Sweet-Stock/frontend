import axios from 'axios'

const env = process.env.REACT_APP_API_KEY

const api = axios.create({
  baseURL: env ?? 'https://sweetstock-backend.servehttp.com/v1/sweet-stock/'
})

export default api
