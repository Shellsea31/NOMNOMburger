const express = require("express");

const orm = require("./config/orm");

// create and export the code that will call the ORM functions using burger specific input for the ORM.

orm.selectAll("burgers");
// orm.insertOne(
//   "burgers",
//   "burger_name",
//   "devoured",
//   "Chilly Cheese Burger",
//   true
// );
