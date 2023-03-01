import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './redux/reducers/mainReducers';

const store = configureStore({
    reducer: mainReducer,
});

export default store;
