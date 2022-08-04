const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');




const config = {

    name: 'sample-express-app',

    port: 3000,

    host: '0.0.0.0',

    abcd: 3,

    abcd: 3
};




const app = express();

const logger = log({ console: true, file: false, label: config.name });




app.use(bodyParser.json());

app.use(cors());

app.use(ExpressAPILogMiddleware(logger, { request: true }));




app.get('/', (req, res) => {

    res.status(200).send('hello Diamond');

});
app.get('/items/:itemId', (req, res) => {

    res.status(200).send(req.params.itemId);

});
app.get('/abcd', (req, res) => {

    res.status(200).send('hello NBCSports');

});



app.listen(config.port, config.host, (e)=> {

    if(e) {

        throw new Error('Internal Server Error');

    }

    logger.info(`${config.name} running on ${config.host}:${config.port}`);

});

