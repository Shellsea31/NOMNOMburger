const connection = require("./connection");

selectAll();
insertOne();
updateOne();

// create the methods that will execute the necessary MySQL commands in the controllers.
const ORM = {
  selectAll: function () {
    console.log("select all");
  },
  insertOne: function () {
    console.log("insert one");
  },
  updateOne: function () {
    console.log("update one");
  },
};

module.exports = ORM;
