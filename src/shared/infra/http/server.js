const express = require('express');

const routes = require('./routes');

require('../sequelize');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Server listening at port 3333!');
});