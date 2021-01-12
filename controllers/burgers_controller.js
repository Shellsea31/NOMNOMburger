// create the router for the app and export the router.
const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((result) => {
    const obj = {
      burgers: result,
    };

    res.render("index", obj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(req.body.burgerName, (data) => {
    res.json({ id: data.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  burger.updateOne(req.params.id, (data) => {
    console.log(data);

    if (data.affectedRows === 0) {
      return res.status(400).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
