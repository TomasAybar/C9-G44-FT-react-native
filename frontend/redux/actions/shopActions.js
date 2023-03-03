export let carrito = []

export const shopActions = {


    addToShop: (product) => {

        console.log(product)
        console.log('action')

        carrito = [...carrito];
        let productRepetido = carrito.find(productCarrito => productCarrito.id === product.id) // BUSCA PRODUCTO REPETIDOS

        if (productRepetido === undefined) { // SI NO ESTA REPETIDO ENTRA ACA

            carrito.push(product)
        }


        // return async (dispatch, getState) => {



        //     dispatch({
        //         type: 'ADDTOSHOP',
        //         payload: { product },
        //     })
        // }
    },

    deleteToShop: (id) => {

        carrito = [...carrito];

        let modifiedCarrito = carrito.filter(productCarrito => productCarrito.id !== id)

        console.log('carrito modificado')
        console.log(modifiedCarrito)

        carrito = modifiedCarrito

        return carrito


        // return async (dispatch, getState) => {

        //     dispatch({
        //         type: 'DELETETOSHOP',
        //         payload: { product },
        //     })
        // }
    },

    verifyShopStorage: (shopStorage) => {

        return async (dispatch, getState) => {

            dispatch({
                type: 'VERIFYSHOPSTORAGE',
                payload: { shopStorage },
            })
        }
    },

    deleteAllToShop: () => {

        carrito = [];

        // return async (dispatch, getState) => {

        //     dispatch({
        //         type: 'DELETEALLTOSHOP',
        //         // payload: { product },
        //     })
        // }
    },

    deleteOneProduct: (product) => {
        // return async (dispatch, getState) => {

        //     dispatch({
        //         type: 'DELETEONEPRODUCT',
        //         payload: { product },
        //     })


        // }
    },


}
