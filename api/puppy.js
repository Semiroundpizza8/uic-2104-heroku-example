let {
  getPuppies,
  getPuppiesWithOwners,
  getPuppyById,
} = require("../db/puppy.js");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  let puppies = await getPuppies();
  res.send(puppies);
});

router.get("/:name", async (req, res, next) => {
  let puppyId = req.params.name;
  let puppies = await getPuppyById(puppyId);
  res.send(puppies);
});

router.get("/puppiesWithOwners", async (req, res, next) => {
  let dbResult = await getPuppiesWithOwners();
  res.send(dbResult);
});

module.exports = router;
