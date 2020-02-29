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
  const { id } = req.params
  const queryText = 'SELECT * FROM orders WHERE id = $1'
  try {
    const { rows } = await db.query(queryText, [id])
    res.send(rows[0])
  } catch (err) {
    console.log(err)
  }
})

// POST /orders
// Creates an order

router.post('/', async (req, res, next) => {
  const { userId } = req.params
  const queryText = "INSERT INTO orders (user_id, time_created) VALUES ($1, $2) RETURNING *"
  try {
    const { order } = await db.query(queryText, [userId, Date.now()])
    console.log("Order details")
    console.log(order)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router