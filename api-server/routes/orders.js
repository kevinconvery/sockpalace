const Router = require('express-promise-router')
const db = require('../db')
const router = new Router()

// GET /orders
router.get('/', async (req, res, next) => {
  const { rows } = await db.query('SELECT * FROM orders')
  res.send(rows)
})

// GET /orders/:id

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { rows } = await db.query('SELECT * FROM orders WHERE id = $1', [id]);
  res.send(rows[0]);
})

// POST /orders
// Creates an order

router.post('/', async (req, res, next) => {

})

module.exports = router;