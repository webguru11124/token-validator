// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import store from './app/store';
import TokenGenerator from './components/TokenGenerator';
import TokenList from './components/TokenList';
import { Box } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start" // Align content at the top
          minHeight="100vh"
          padding="32px" // Add padding around the content
        >
          <TokenGenerator />
          <Box mt={2} width="100%" alignItems="center"> {/* Add margin top */}
            <TokenList />
          </Box>
        </Box>
      </Container>
    </Provider>
  );
}

export default App;
