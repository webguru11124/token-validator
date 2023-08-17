#!/bin/bash

# Start the ValidatorService
cd validator-service
node index.js &
cd ..

# Start the Frontend
cd token-generator-app
npm start
