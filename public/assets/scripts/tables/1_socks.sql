DROP TABLE socks;

CREATE TABLE socks(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  -- Price in cents
  purchase_price INTEGER NOT NULL,
  sale_price INTEGER NOT NULL,
  -- Discount in percentage
  discount SMALLINT NOT NULL DEFAULT 0
);

