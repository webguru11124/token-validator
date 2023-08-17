// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { validateToken } = require('./validator');


const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.post('/validate-token', async (req, res) => {
    const { token } = req.body;
    const valid = await validateToken(token);

    res.json({ valid });
});