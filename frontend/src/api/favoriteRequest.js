import axios from 'axios'
import { API_URI } from '@env'
import { useFavoriteStore } from '../store/FavoriteStore'


const URL = API_URI

export const favoriteRequest = {

    addOrRemoveFavorite: async (userid, productid) => {

        try {

            const res = await axios.post(`${URL}/products/favorite/${userid}/${productid}`)

            return res;

        }

        catch (error) {
            console.log(error)
        }

    },

    getFavoriteByUser: async (userid) => {

        try {

            const res = await axios.get(`${URL}/products/favorite/${userid}`)

            if (res.data.success) {

                useFavoriteStore.getState().setFavorites(res.data.response)

            }

            return res

        }

        catch (error) {
            console.log(error)
        }

    },

}