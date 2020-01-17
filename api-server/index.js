const express = require('express');
const app = express();
const port = 4000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mountRoutes = require('./routes');

app.use(morgan('tiny'));
app.use(bodyParser.json());
mountRoutes(app);

app.get('/', (req, res) => res.send("Hello From Sock Palace!"));

app.listen(port, console.log(`Sock Palace Listening on Port ${port}!`));