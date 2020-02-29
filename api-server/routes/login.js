const Router = require('express-promise-router');
const db = require('../db');
const router = new Router();

// POST /login/validate
// Validates the user when they log in
// Needs to include bcrypt or something of that nature for password
router.post('/validate', async (req, res) => {
  const { username, password } = req.body
  if (!password) {
    res.json("INVALID_LOGIN_NO_PASSWORD")
  } else {
    try {
      // compare the username against existing username:
      const { rows } = await db.query(`SELECT * FROM users WHERE username = $1;`, [username])
      if (rows.length === 0) {
        res.json("INVALID_LOGIN_NO_USER")
      } else {
        if (rows[0].password === password) {
          res.json("VALID_LOGIN");
        } else {
          res.json("INVALID_LOGIN_PASSWORDS_DO_NOT_MATCH");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
})

module.exports = router;