// src/api/generateToken.js
export const generateToken = (selectedDigits) => {
    const token = Array.from({ length: 16 }, () =>
        selectedDigits[Math.floor(Math.random() * selectedDigits.length)]
    ).join('');
    return token;
};
