// validatorService.js
function generateToken(availableDigits) {
    const tokenDigits = [];
    const numberOfDigits = 16; // Adjust this as needed

    for (let i = 0; i < numberOfDigits; i++) {
        const randomIndex = Math.floor(Math.random() * availableDigits.length);
        tokenDigits.push(availableDigits[randomIndex]);
    }

    const token = tokenDigits.join('');
    return token.match(/.{1,4}/g).join('-');
}

function validateToken(token) {
    const sanitizedToken = token.replace(/-/g, '');
    let sum = 0;
    let isSecond = false;

    for (let i = sanitizedToken.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitizedToken[i], 10);

        if (isSecond) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            } x
        }

        sum += digit;
        isSecond = !isSecond;
    }

    return sum % 10 === 0;
}

module.exports = { generateToken, validateToken };
