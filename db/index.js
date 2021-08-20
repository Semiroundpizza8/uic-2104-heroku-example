const pg = require("pg");
pg.defaults.ssl = true;

// Create a connection to our DB
const databaseName = "PuppyStore";
const PORT = 5432;
const client = new pg.Client(
  process.env.DATABASE_URL || `postgres://localhost:${PORT}/${databaseName}`
);
client.connect();

module.exports = {
  client,
};
