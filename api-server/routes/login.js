const Router = require('express-promise-router');
const db = require('../db');
const router = new Router();

// POST /login/validate
// Validates the user when they log in
// Needs to include bcrypt or something of that nature for password
router.post('/validate', async (req, res) => {
  try {
    // compare the username against existing username:
    const { rows } = await db.query(`SELECT * FROM users WHERE username = $1;`, [req.body.username])
    if (rows.length === 0) {
      console.log("Invalid login!");
    } else {
      if (rows[0].password === req.body.password) {
        console.log("Valid login!");
      } else {
        console.log("Passwords do not match!");
      }
    }
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;