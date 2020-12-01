require('dotenv/config');

const express = require('express');
const cors = require('cors');

require('express-async-errors');
require('../sequelize');

const { errors } = require('celebrate');
const routes = require('./routes');
const ErrorHandler = require('./middlewares/ErrorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());
app.use(ErrorHandler);

app.listen(3333, () => {
    console.log('Server running on port 3333!');
});