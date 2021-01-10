// create the router for the app and export the router.
const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

// burger.selectAll();

router.get("/", (req, res) => {
  burger.selectAll((result) => {
    const obj = {
      burgers: result,
    };
    console.log(obj);
    res.render("index", obj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(req.body.burgerName, req.body.devoured, (data) => {
    console.log(data);
    res.json({ id: data.insertId });
  });
});

router.put("/api/burgers/:id", );

module.exports = router;
