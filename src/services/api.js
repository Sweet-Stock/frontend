import axios from 'axios'

const env = process.env.REACT_APP_API_KEY

const api = axios.create({
  baseURL: env
})

export default api
