import { combineReducers } from 'redux';
import { productReducers } from './productReducers'
import { userReducers } from './userReducers'
import { shopReducers } from './shopReducers'

const mainReducer = combineReducers({
    productReducers,
    userReducers,
    shopReducers

})

export default mainReducer;