const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send("Hello From Sock Palace!"));

app.listen(port, console.log(`Sock Palace Listening on Port ${port}!`));