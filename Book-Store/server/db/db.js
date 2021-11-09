const { Pool } = require("pg");

let pool = new Pool({
  host: "localhost",
  port: "5432",
  database: "pavankumarkoieri",
  user: "postgres",
  password: "Pavan@123",
});

module.exports = pool;
