const initialState = {
    // Define el estado inicial aquí
    products: []
};

export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        // Define las acciones aquí
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

