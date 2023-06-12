import axios from 'axios'
import { API_URI } from '@env'

const URL = API_URI
export const publicationRequest = {
  getPublication: async () => {
    try {
      const res = await axios.get(`${URL}/publications`)
      return res
    } catch (error) {
      console.log(error)
    }
  },
  addPublication: async (data) => {
    try {
      const res = await axios.post(`${URL}/publications`, { data })
      return res
    } catch (error) {
      console.log(error)
    }
  },
  removePublication: async (id) => {
    try {
      const res = await axios.delete(`${URL}/publications/${id}`)
      return res
    } catch (error) {
      console.log(error)
    }
  },
  updatePublication: async (data) => {
    try {
      const res = await axios.put(`${URL}/publications/${id}`, { data })
      return res
    } catch (error) {
      console.log(error)
    }
  },
  getOnePublication: async (id) => {
    try {
      const res = await axios.get(`${URL}/publications/${id}`)
      return res
    } catch (error) {
      console.log(error)
    }
  }
}
