# how to run

you should npm install in both frontend and backend

then run 

`
./start.sh
`

# technology used

backend use node/express

frontend use react, react-toolkit, axios, material ui

# about project

Please, develop a web-based application that allows you to generate tokens and validate them.

Token has a format of XXXX-XXXX-XXXX-XXXX, and consists of the 0-9 digits.

User is able to choose which digits are available for token generation in the UI, e.g. available digits are: 2,4,7,9,0 - it means that token can consist only of them, e.g. 2249-4472-0279-9420

User is able to initiate single token creation via UI, in this token is generated and displayed on UI. UI creates a token randomly based on available digits provided.

User is able to validate the created token via UI, in this case the token is being passed to ValidatorService and the result of validation is displayed in UI. Validator uses Lunh algorithm to check if token is valid or not: https://en.wikipedia.org/wiki/Luhn_algorithm 

Also User is able to start/stop an infinite token creation loop. Tokens are generated and validated similar to single token mode, statistics (total / valid count is being displayed and updated), valid tokens are listed.

 

Tech requirements:

FrontEnd - is React application

ValidatorService - in NodeJS application

Communication is via REST API

Code should be placed into public repo (e.g. GitHub) and link needs to be provided.

Repository structure:

/frontend/..

/validator/..

start.sh

start.bat

Running start.sh (or start.bat for MS Windows) script should bring up all services and make FE available on localhost:8080
