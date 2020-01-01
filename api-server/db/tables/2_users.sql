DROP TABLE users;
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255),
  -- abbreviations for province
  province CHAR(2),
  postal_code CHAR(6)
);

INSERT INTO users (username, email, password, first_name, last_name, address, city, province, postal_code)
  VALUES ('test', 'test@test.com', 'test', 'Test', 'User', '123 Test Lane', 'Test', 'ON', 'M5M5M5');
