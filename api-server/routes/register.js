const Router = require('express-promise-router');
const db = require('../db');
const router = new Router();

router.post('/new', async (req, res) => {
  try {
    console.log(`REQ BODY IS ${req.body.username}`)
    const { username, email, password, firstName, lastName, address, city, province, postalCode } = req.body;
    await db.query(`
      INSERT INTO users (username, email, password, first_name, last_name, address, city, province, postal_code) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
      `, [username, email, password, firstName, lastName, address, city, province, postalCode]);
  } catch (err) {
    console.error(err);
  }
})

module.exports = router;
