import axios from 'axios'
import { API_URI } from '@env'
import { useUserStore } from '../store/userStore'

const URL = API_URI

export const userInfoRequest = {
  getInfoUsers: async () => {
    try {
      const res = await axios.get(`${URL}/user/info`)
      return res
    } catch (error) {
      console.log(error)
    }
  },

  addInformationUsers: async (phone, address, id) => {
    try {
      const res = await axios.post(`${URL}/user/${id}`)
      return res
    } catch (error) {
      console.log(error)
    }
  },

  removeInfoUser: async (id) => {
    try {
      const res = await axios.post(`${URL}/user/info/${id}`)
      return res
    } catch (error) {
      console.log(error)
    }
  }
}
