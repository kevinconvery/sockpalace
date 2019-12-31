const socks = require('./socks');

module.exports = app => {
  app.use('/socks', socks);
}