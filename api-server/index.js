const express = require('express');
const app = express();
const mountRoutes = require('./routes');
const port = 4000;
const morgan = require('morgan');
const db = require('./db');

app.use(morgan('tiny'));
mountRoutes(app);

app.get('/', (req, res) => res.send("Hello From Sock Palace!"));

app.listen(port, console.log(`Sock Palace Listening on Port ${port}!`));