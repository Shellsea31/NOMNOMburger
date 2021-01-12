const orm = require("../config/orm.js");

// create and export the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
  selectAll(cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  insertOne(param1Val, cb) {
    orm.insertOne(
      "burgers",
      "burger_name",
      "devoured",
      param1Val,
      0,
      (result) => cb(result)
    );
  },
  updateOne(condVal, cb) {
    orm.updateOne("burgers", "burger_name", "devoured", "id", condVal, (result) =>
      cb(result)
    );
  },
};

module.exports = burger;
