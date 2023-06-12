import axios from 'axios';
import { API_URI } from '@env';
import { useUserStore } from '../store/userStore';

const URL = API_URI;

export const paymentRequest = {
  getPaymentById: async (id) => {
    try {
      const res = await axios.get(`${URL}/user/info/pay/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  addPaymentBV: async (id, paymentBV) => {
    try {
      const res = await axios.post(`${URL}/user/info/pay/${id}`, {
        paymentBV,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  addPaymentTRF: async (id, paymentTRF) => {
    try {
      const res = await axios.post(`${URL}/user/info/pay/${id}`, {
        paymentTRF,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};
