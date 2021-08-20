const pg = require("pg");
// Create a connection to our DB
const databaseName = "PuppyStore";
const PORT = 5432;
const client = new pg.Client(
  process.env.DATABASE_URL || `postgres://localhost:${PORT}/${databaseName}`,
  {
    ssl: { rejectUnauthorized: false },
  }
);
client.connect();

module.exports = {
  client,
};
