DROP TABLE order_items;
CREATE TABLE order_items(
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  -- computed at the time of sale perhaps since it might be the discounted one
  price INTEGER NOT NULL
);