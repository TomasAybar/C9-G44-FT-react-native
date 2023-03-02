import { combineReducers } from 'redux';
import { productReducers } from './productReducers'
import { userReducers } from './userReducers'

const mainReducer = combineReducers({
    productReducers,
    userReducers
})

export default mainReducer;