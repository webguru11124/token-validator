// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../features/token/tokenSlice';

const store = configureStore({
    reducer: {
        token: tokenReducer,
    },
});

export default store;
