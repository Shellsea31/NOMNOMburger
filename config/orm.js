const connection = require("./connection");

// create the methods that will execute the necessary MySQL commands in the controllers.
const orm = {
  selectAll() {
    console.log("select all");
  },
  insertOne() {
    console.log("insert one");
  },
  updateOne() {
    console.log("update one");
  },
};

module.exports = orm;
