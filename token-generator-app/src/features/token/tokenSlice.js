// src/features/token/tokenSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    availableDigits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    selectedDigits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    tokens: [],
    validationStatus: {},
};

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        toggleDigit: (state, action) => {
            const digit = action.payload;
            if (state.selectedDigits.includes(digit)) {
                state.selectedDigits = state.selectedDigits.filter((d) => d !== digit);
            } else {
                state.selectedDigits.push(digit);
            }
        },
        addToken: (state, action) => {
            state.tokens.push(action.payload);
        },
        updateValidationStatus: (state, action) => {
            state.validationStatus[action.payload.token] = action.payload.valid;
        },
    },
});

export const { toggleDigit, addToken, updateValidationStatus } = tokenSlice.actions;

export default tokenSlice.reducer;
