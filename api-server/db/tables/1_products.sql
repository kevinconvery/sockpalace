DROP TABLE products;
CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  -- Price in cents
  purchase_price INTEGER NOT NULL,
  sale_price INTEGER NOT NULL,
  -- Discount in percentage (from sale price)
  discount INTEGER NOT NULL
);

