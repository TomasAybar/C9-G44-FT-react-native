import axios from 'axios'
import { API_URI } from '@env'
import { useUserStore } from '../store/userStore'

const URL = API_URI
// const URL = 'https://modacirc-backend-production.up.railway.app/api'

export const userRequest = {
	signIn: async (email, password) => {
		try {
			const res = await axios.post(`${URL}/signin`, { email, password })

			if (res.data.success) {
				useUserStore.getState().setUser(res.data.response.userData)
				useUserStore.getState().setTokenUser(res.data.response.token)
			}

			return res
		} catch (error) {
			console.log(error)
		}
	},

	signUp: async (data) => {
		try {
			const res = await axios.post(`${URL}/signup`, data)

			return res
		} catch (error) {
			console.log(error)
		}
	},

	getUsers: async (token) => {
		try {
			const res = await axios.get(`${URL}/users`, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})

			return res
		} catch (error) {
			console.log(error)
		}
	},
}
