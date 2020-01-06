const Router = require('express-promise-router');
const db = require('../db');
const router = new Router();


router.get('/', (req, res) => {
  res.send('Login route hit!');
})

router.post('/validate', async (req, res) => {
  try {
    console.log("VALIDATE FUNCTION CALLED");
    // compare the username against existing username:
    console.log(`req.body.username is ${req.body.username}`);
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