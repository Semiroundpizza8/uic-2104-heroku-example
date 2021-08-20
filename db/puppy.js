const { client } = require("./"); // { client: pg.Client };

async function getPuppies() {
  const data = await client.query(`
            SELECT *
            FROM puppy;
        `);

  console.log(data.rows);
  return data.rows;
}

async function getPuppiesWithOwners() {
  const data = await client.query(`
              SELECT *
              FROM puppy
              INNER JOIN owners
              ON puppy."ownerId" = owners.id;
          `);

  console.log(data.rows);
  return data.rows;
}

async function createNewPuppy(name, breed, age, ownerId) {
  const data = await client.query(`
    INSERT INTO puppy(name, breed, age, "ownerId")
    VALUES (
        '${name}',
        '${breed}',
        ${age},
        ${ownerId}
    )
    `);
}

/**
 * Takes a string, gives back the matching puppy
 * @param {string} name
 * @returns
 */
async function getPuppyById(name) {
  const data = await client.query(`
        SELECT *
        FROM puppy
        WHERE puppy.name = '${name}'
    `);
  return data.rows[0];
}

module.exports = {
  getPuppies,
  getPuppiesWithOwners,
  getPuppyById,
  createNewPuppy,
};
