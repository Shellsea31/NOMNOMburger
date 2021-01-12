const orm = require("../config/orm.js");

// create and export the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
  selectAll(cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  insertOne(param1Val, param2Val, cb) {
    orm.insertOne(
      "burgers",
      "burger_name",
      "devoured",
      param1Val,
      param2Val,
      (result) => cb(result)
    );
  },
  updateOne(colVal, condVal) {
    orm.updateOne("burgers", "burger_name", colVal, "id", condVal, (result) =>
      cb(result)
    );
  },
};

module.exports = burger;
