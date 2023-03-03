// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    productsInShop: [],
}


export const shopReducers = (state = initialState, action) => {

    let productsInShop = [...state.productsInShop];


    switch (action.type) {

        case 'ADDTOSHOP':

            productsInShop = [...state.productsInShop];

            let productRepetido = productsInShop.find(product => product.id === action.payload.product.id) // BUSCA PRODUCTO REPETIDOS  

            if (productRepetido === undefined) { // SI NO ESTA REPETIDO ENTRA ACA

                productsInShop.push(action.payload.product)

                return {
                    ...state,
                    productsInShop: productsInShop

                };
            } else { // SI ESTA REPETIDO ENTRA ACA

                productRepetido.cant = productRepetido.cant + 1;

                return {
                    ...state,
                    productsInShop: productsInShop

                };


            }

        case 'DELETETOSHOP':

            productsInShop = [...state.productsInShop];

            let modifiedShop = productsInShop.filter(product => product.id !== action.payload.product.id)

            return {
                ...state,
                productsInShop: modifiedShop

            };

        case 'VERIFYSHOPSTORAGE':
            return {
                productsInShop: action.payload.shopStorage // IGUALO MI LOCAL STORAGE A MI STORE
            }

        case 'DELETEALLTOSHOP':

            return {
                ...state,
                productsInShop: []

            };


        case 'DELETEONEPRODUCT':

            productsInShop = [...state.productsInShop];

            let productRepetidoDel = productsInShop.find(product => product.id === action.payload.product.id) // BUSCA PRODUCTO REPETIDOS

            if (productRepetidoDel.cant > 1) {

                productRepetidoDel.cant = productRepetidoDel.cant - 1;

            }


            return {
                ...state,
                productsInShop: productsInShop

            }

        default:
            return state;

    }


}
