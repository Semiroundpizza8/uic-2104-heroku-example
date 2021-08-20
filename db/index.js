const pg = require("pg");

// Create a connection to our DB
const databaseName = "PuppyStore";
const PORT = 5432;
const client = new pg.Client(`postgres://localhost:${PORT}/${databaseName}`);
client.connect();

module.exports = {
  client,
};
