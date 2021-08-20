const express = require("express");
const ownerRouter = require("./owners");
const puppyRouter = require("./puppy");
const router = express.Router();

router.use("/owners", ownerRouter);
router.use("/puppies", puppyRouter);

module.exports = router;
