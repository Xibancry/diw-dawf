const { Pool } = require('pg');

const pool = new Pool({
  user: 'user',
  password: 'password',
  host: 'db',
  port: 5432, // default Postgres port
  database: 'mydatabase'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};