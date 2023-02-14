import axios from 'axios'
import { parseCookies } from 'nookies'

const cookies = parseCookies()
const api = axios.create({
  baseURL: 'https://ciap-api.onrender.com',
  headers: {
    Authorization: `Bearer ${cookies['auth-token']}`,
    'Content-Type': 'application/json',
  },
})

export default api
