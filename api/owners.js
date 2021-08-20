const express = require("express");
let { getAllOwners } = require("../db/owners");
const router = express.Router();

router.get("/", async (req, res, next) => {
  // Goes into our database and grabs all the owners out of it
  console.log("Grabbing our data....");
  const result = await getAllOwners();

  console.log("Sending back result...");
  res.send(result);
});

module.exports = router;
