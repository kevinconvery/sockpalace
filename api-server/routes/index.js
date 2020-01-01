const products = require('./products');
const login = require('./login');

module.exports = app => {
  app.use('/products', products),
  app.use('/login', login)
}