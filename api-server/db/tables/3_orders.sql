DROP TABLE orders CASCADE;
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  time_created BIGINT
);
