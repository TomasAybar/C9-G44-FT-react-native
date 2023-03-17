import axios from 'axios'
import { API_URI } from '@env'
import { useProductStore } from '../store/productStore'

// const URL = API_URI
const URL = 'https://modacirc-backend-production.up.railway.app/api'

export const productRequest = {
	removeProduct: async (id, token) => {
		try {
			const res = await axios.delete(`${URL}/products/delete/${id}`, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})

			return res
		} catch (error) {
			console.log(error)
		}
	},

	addProduct: async (data, token) => {
		try {
			const res = await axios.post(
				`${URL}/products/add`,
				{ data },
				{
					headers: {
						Authorization: 'Bearer ' + token,
					},
				}
			)

			return res
		} catch (error) {
			console.log(error)
		}
	},

	getProducts: async () => {
		try {
			const res = await axios.get(`${URL}/products`)

			if (res.data.success) {
				useProductStore.getState().setProducts(res.data.response)
			}

			return res
		} catch (error) {
			console.log(error)
		}
	},

	getOneProduct: async (id) => {
		try {
			const res = await axios.get(`${URL}/products/${id}`)

			return res
		} catch (error) {
			console.log(error)
		}
	},
}
