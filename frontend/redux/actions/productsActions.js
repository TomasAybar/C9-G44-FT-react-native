import axios from "axios";
import { API_URL } from "@env"


const productsActions = {

    getProducts: () => {

        return async (dispatch, getState) => {

            const res = await axios.get(`${API_URL}/products`);
            dispatch({ type: "GET_PRODUCTS", payload: res.response });
            console.log(res.data.response)
        };
    },

};
export default productsActions;