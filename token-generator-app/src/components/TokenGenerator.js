// src/components/TokenGenerator.js
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { toggleDigit, addToken } from '../features/token/tokenSlice';
import { generateToken } from '../api/generateToken';
const TokenGenerator = () => {
    const dispatch = useDispatch();
    const selectedDigits = useSelector((state) => state.token.selectedDigits);

    const [isLoopRunning, setIsLoopRunning] = useState(false);

    const handleDigitToggle = ({ target: { value: digit } }) => {
        dispatch(toggleDigit(parseInt(digit)));
    };

    const handleGenerateToken = useCallback(async () => {
        const token = await generateToken(selectedDigits);
        dispatch(addToken(token));
    }, [selectedDigits]);


    useEffect(() => {
        let interval;
        if (isLoopRunning) {
            interval = setInterval(async () => {
                console.log(selectedDigits);
                handleGenerateToken();
            }, 2000); // Interval in milliseconds (e.g., 2000ms = 2 seconds)
        }

        return () => clearInterval(interval);
    }, [isLoopRunning,]);

    return (
        <div>
            <ToggleButtonGroup
                value={selectedDigits}
                onChange={handleDigitToggle}
                aria-label="Digits"
                style={{ marginRight: "12px" }}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                    <ToggleButton
                        key={digit}
                        value={digit}
                        aria-label={`Digit ${digit}`}
                        style={{
                            backgroundColor: selectedDigits.includes(digit) ? 'blue' : 'transparent',
                            color: selectedDigits.includes(digit) ? 'white' : 'black',
                        }}
                    >
                        {digit}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <Button
                variant="contained"
                color={isLoopRunning ? 'secondary' : 'primary'}
                onClick={() => setIsLoopRunning(!isLoopRunning)}
            >
                {isLoopRunning ? 'Stop Loop' : 'Start Loop'}
            </Button>
        </div>
    );
};

export default TokenGenerator;
