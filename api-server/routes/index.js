const products = require('./products');
const orders = require('./orders');
const login = require('./login');
const register = require('./register');

module.exports = app => {
  app.use('/products', products),
  app.use('/orders', orders),
  app.use('/login', login),
  app.use('/register', register)
}