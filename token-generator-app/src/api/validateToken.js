// src/api/validateToken.js
import axios from 'axios';

export const validateToken = async (token) => {
    try {
        const response = await axios.post('http://localhost:5000/validate-token', { token });
        return response.data.valid;
    } catch (error) {
        console.error('Error validating token:', error);
        return false;
    }
};
