import axios from "axios";
import { AsyncStorage } from 'react-native';
import { API_URL } from "@env"

export const userActions = {

    signIn: ({ email, password }) => {

        return async (dispatch, getState) => {

            try {
                const res = await axios.post(`${API_URL}/signin`, { email, password })

                if (res.data.success) {
                    await AsyncStorage.setItem('token', res.data.response.token);
                    await AsyncStorage.setItem('user', res.data.response.userData);
                    dispatch({ type: 'SIGNIN', payload: res.data.response.userData })

                }

                return res;

            } catch (error) {

                console.log(error)

            }

        }
    }

}
