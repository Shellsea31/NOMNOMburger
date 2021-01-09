// create the router for the app and export the router.
const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
  res.send("hello");
});

// router.post();
// router.put();

module.exports = router;
