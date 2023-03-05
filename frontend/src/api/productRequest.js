import axios from 'axios'
import { API_URI } from '@env'


const URL = API_URI

export const productRequest = {

    removeProduct: async (id, token) => {

        try {

            const res = await axios.delete(`${URL}/products/delete/${id}`,
                {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })

            return res;

        }

        catch (error) {
            console.log(error)
        }


    },

    addProduct: async (data, token) => {

        try {

            const res = await axios.post(`${URL}/products/add`, { data },
                {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })

            return res;

        }

        catch (error) {
            console.log(error)
        }


    },

    getProducts: async () => {

        try {

            const res = await axios.get(`${URL}/products`)

            return res

        }

        catch (error) {
            console.log(error)
        }


    },

    getOneProduct: async (id) => {

        try {

            const res = await axios.get(`${URL}/products/${id}`)

            return res

        }

        catch (error) {
            console.log(error)
        }


    },

}