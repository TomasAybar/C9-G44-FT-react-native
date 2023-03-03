export let carrito = []

export const shopActions = {

    addToShop: (product) => {

        carrito = [...carrito];
        let productRepetido = carrito.find(productCarrito => productCarrito.id === product.id) // BUSCA PRODUCTO REPETIDOS

        if (productRepetido === undefined) { // SI NO ESTA REPETIDO ENTRA ACA

            carrito.push(product)
        }

    },

    deleteToShop: (id) => {

        carrito = [...carrito];

        let modifiedCarrito = carrito.filter(productCarrito => productCarrito.id !== id)

        carrito = modifiedCarrito

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

    },



}
