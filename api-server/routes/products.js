const Router = require('express-promise-router');
const db = require('../db');
const router = new Router();

module.exports = router;

router.get('/', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM products');
  res.send(rows);
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query('SELECT * FROM products WHERE id = $1', [id]);
  res.send(rows[0]); 
})

// Only find discounted items
router.get('/discount/:amount', async (req, res) => {
  const { amount } = req.params;
  const { rows } = await db.query('SELECT * FROM products WHERE discount > $1', [amount]);
  res.send(rows);
})