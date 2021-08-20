const { client } = require("./");

// Goes into our database and grabs all the owners out of it
async function getAllOwners() {
  let result = await client.query(`
        SELECT *
        FROM owners;
    `);

  console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllOwners,
};
