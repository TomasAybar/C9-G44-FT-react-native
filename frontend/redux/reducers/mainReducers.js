import { combineReducers } from 'redux';
// import postReducers from '../reducers/postReducers';
// import favoriteReducers from '../reducers/favoriteReducers';
// import userReducers from '../reducers/userReducers';
import { productReducers } from './productReducers'

const mainReducer = combineReducers({
    productReducers
})

export default mainReducer;