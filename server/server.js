const express  = require('express');
const apiRouter = require('./routes');

const app = express();

app.use(express.json());

app.use('/api/translate', apiRouter);

const port = process.env.PORT || '3000';

app.listen(port, () => {
    console.log(`Listenning on port ${port}...`)
});