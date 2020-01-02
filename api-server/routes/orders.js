const Router = require('express-promise-router');
const db = require('../db');
const router = new Router();

router.get('/', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM orders');
  res.send(rows);
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query('SELECT * FROM orders WHERE id = $1', [id]);
  res.send(rows[0]);
})

module.exports = router;