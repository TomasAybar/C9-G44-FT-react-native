import axios from 'axios'
import { API_URI } from '../config/config'

export const ecoModaDB = axios.create({
  baseURL: API_URI
})
