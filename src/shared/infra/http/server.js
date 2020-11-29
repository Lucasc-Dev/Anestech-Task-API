const express = require('express');

require('express-async-errors');
require('../sequelize');

const routes = require('./routes');
const ErrorHandler = require('./middlewares/ErrorHandler');

const app = express();

app.use(express.json());
app.use(routes);

app.use(ErrorHandler);

app.listen(3333, () => {
    console.log('Server running on port 3333!');
});