const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "psql1977",
    host: "localhost",
    port: 5432, //5432 is psql default port
    database: "perntodo"
});

module.exports = pool;