const { Pool, Client } = require('pg');
const connectionString = 'postgresql://postgres:password@localhost:5432/sock_db';

const pool = new Pool({
  connectionString: connectionString
});
const client = new Client({
  connectionString: connectionString
});
client.connect();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}