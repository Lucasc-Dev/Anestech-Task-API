import express from 'express';

import routes from './routes/index.js';

const app = express();

app.use(routes);

app.listen(3333, () => {
    console.log('Server listening at port 3333!');
});