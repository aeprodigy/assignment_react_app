
import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../slices/postSlice';
import userReducer from '../slices/userSlice';


const store = configureStore({
    reducer:{
        user:userReducer,
        posts:postReducer,
    },
});

export default store;