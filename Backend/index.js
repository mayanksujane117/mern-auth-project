const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('./Models/db');
const authRouter = require('./Routes/AuthRouter');

const PORT = process.env.PORT || 8000;

app.get('/ping', (req, res) => {
    res.send('Hello World!');
});

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})