// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    productsInShop: [],
}

// const setLocalStorage = async (clave, valor) => {

//     AsyncStorage.setItem(clave, valor)
//         .then(() => {
//             console.log('Valor guardado en el almacenamiento local.');
//         })
//         .catch((error) => {
//             console.log('Error al guardar el valor en el almacenamiento local: ', error);
//         });


// }

export const shopReducers = (state = initialState, action) => {

    let productsInShop = [...state.productsInShop];
    console.log(action)

    switch (action.type) {

        case 'ADDTOSHOP':

            console.log('ADDTOSHOP')

            productsInShop = [...state.productsInShop];

            let productRepetido = productsInShop.find(product => product.id === action.payload.product.id) // BUSCA PRODUCTO REPETIDOS  

            if (productRepetido === undefined) { // SI NO ESTA REPETIDO ENTRA ACA

                productsInShop.push(action.payload.product)


                // localStorage.setItem('carrito', JSON.stringify(productsInShop)) // hace que mi ls se vaya modificando en vivo

                // setLocalStorage('carrito', productsInShop)
                // AsyncStorage.setItem('carrito', productsInShop)
                //     .then(() => {
                //         console.log('Valor guardado en el almacenamiento local.');
                //     })
                //     .catch((error) => {
                //         console.log('Error al guardar el valor en el almacenamiento local: ', error);
                //     });


                return {
                    ...state,
                    productsInShop: productsInShop

                };
            } else { // SI ESTA REPETIDO ENTRA ACA

                productRepetido.cant = productRepetido.cant + 1;

                // localStorage.setItem('carrito', JSON.stringify(productsInShop)) // hace que mi ls se vaya modificando en vivo

                // setLocalStorage('carrito', productsInShop)


                return {
                    ...state,
                    productsInShop: productsInShop

                };


            }

        case 'DELETETOSHOP':

            productsInShop = [...state.productsInShop];

            let modifiedShop = productsInShop.filter(product => product.id !== action.payload.product.id)

            // localStorage.setItem('carrito', JSON.stringify(modifiedShop)) // hace que mi ls se vaya modificando en vivo

            // setLocalStorage('carrito', modifiedShop)

            return {
                ...state,
                productsInShop: modifiedShop

            };

        case 'VERIFYSHOPSTORAGE':
            return {
                productsInShop: action.payload.shopStorage // IGUALO MI LOCAL STORAGE A MI STORE
            }

        case 'DELETEALLTOSHOP':

            // localStorage.removeItem('carrito')

            // AsyncStorage.removeItem('carrito')
            //     .then(() => {
            //         console.log('Elemento eliminado del almacenamiento local.');
            //     })
            //     .catch((error) => {
            //         console.log('Error al eliminar el elemento del almacenamiento local: ', error);
            //     });


            return {
                ...state,
                productsInShop: []

            };


        case 'DELETEONEPRODUCT':

            productsInShop = [...state.productsInShop];

            // console.log('id del reducer', action.payload.product.id)
            let productRepetidoDel = productsInShop.find(product => product.id === action.payload.product.id) // BUSCA PRODUCTO REPETIDOS

            if (productRepetidoDel.cant > 1) {

                productRepetidoDel.cant = productRepetidoDel.cant - 1;

                // productsInShop.push(productRepetidoDel)
                // localStorage.setItem('carrito', JSON.stringify(productsInShop))

                // setLocalStorage('carrito', productsInShop)

            }


            return {
                ...state,
                productsInShop: productsInShop

            }

        default:
            console.log('default')
            return state;

    }


}
