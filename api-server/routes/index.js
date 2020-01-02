const products = require('./products');
const orders = require('./orders');
const login = require('./login');

module.exports = app => {
  app.use('/products', products),
  app.use('/orders', orders),
  app.use('/login', login)
}