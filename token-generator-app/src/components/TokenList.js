// src/components/TokenList.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress component

import { updateValidationStatus } from '../features/token/tokenSlice';
import { validateToken } from '../api';
// Define the custom styles using makeStyles
const TokenList = () => {
    const dispatch = useDispatch();
    const tokens = useSelector((state) => state.token.tokens);
    const validationStatus = useSelector((state) => state.token.validationStatus);

    const [validatingTokens, setValidatingTokens] = useState([]); // Maintain a list of tokens currently being validated


    console.log("validating", validatingTokens);
    useEffect(() => {
        const interval = setInterval(async () => {
            for (const token of tokens) {
                if (validationStatus[token] === undefined && !validatingTokens.includes(token)) {
                    setValidatingTokens((prevTokens) => [...prevTokens, token]); // Mark token as validating
                    const valid = await validateToken(token);
                    dispatch(updateValidationStatus({ token, valid }));
                    setValidatingTokens((prevTokens) => prevTokens.filter((t) => t !== token)); // Remove token from validating list
                }
            }
        }, 1000); // Interval in milliseconds (e.g., 5000ms = 5 seconds)

        return () => clearInterval(interval);
    }, [dispatch, tokens, validationStatus, validatingTokens]);

    return (
        <List>
            {tokens.map((token) => (
                <ListItem key={token} style={{ textAlign: "center" }}>
                    <ListItemText primary={token} style={{ textAlign: "center" }} />
                    {validationStatus[token] !== undefined ? (
                        <ListItemText secondary={validationStatus[token] ? 'Valid' : 'Invalid'} />
                    ) : <CircularProgress size={16} />
                    }
                </ListItem>
            ))
            }
        </List >
    );
};
export default TokenList;
