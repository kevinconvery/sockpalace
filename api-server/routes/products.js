const Router = require('express-promise-router')
const db = require('../db')
const router = new Router()

// GET /products/discount/:amount
// Only find discounted items
// Discount is calculated by a percentage amount indicated in amount
router.get('/discount/:amount', async (req, res) => {
  try {
    const { amount } = req.params
    const { rows } = await db.query('SELECT * FROM products WHERE discount > $1', [amount])
    res.send(rows)
  } catch (err) {
    console.error(err)
  }
})

router.get('/search/:searchValue', async (req, res) => {
  try {
    const { searchValue } = req.params
    const { rows } = await db.query('SELECT * FROM products WHERE name = $1', [searchValue])
    res.send(rows)
  } catch (err) {
    console.error(err)
  }
})

// GET /products/:id
// GET a specific product by id
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM products WHERE id = $1', [id])
  res.send(rows[0])
})

router.get('/', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM products')
  res.send(rows)
})

module.exports = router