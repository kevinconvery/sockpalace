const express = require('express')
const app = express()
const port = 4000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mountRoutes = require('./routes')
const { Pool } = require('pg')
const session = require('express-session')
const pgSession = require('connect-pg-simple')(session);
const uuid = require('uuid/v4')
const connectionString = 'postgresql://postgres:password@localhost:5432/sock_db'

const pool = new Pool({
  connectionString: connectionString
})

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(session({
  store: new pgSession({
    pool: pool
  }),
  genid: req => uuid(),
  resave: false,
  secret: 'fluffy bunny toes',
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}))

mountRoutes(app)

app.get('/', (req, res) => res.send("Hello From Sock Palace!"))

app.listen(port, console.log(`Sock Palace Listening on Port ${port}!`))