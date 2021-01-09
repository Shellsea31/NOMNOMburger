const { insertOne } = require("../config/orm");
const orm = require("../config/orm");

// create and export the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
  selectAll() {
    orm.selectAll("burgers", (result) => console.log(result));
  },
  insertOne(param1Val, param2Val) {
    orm.insertOne(
      "burgers",
      "burger_name",
      "devoured",
      param1Val,
      param2Val,
      (result) => console.log(result.affectedRows)
    );
  },
  updateOne(colVal, condVal) {
    orm.updateOne("burgers", "burger_name", colVal, "id", condVal, (result) =>
      console.log(result.affectedRows)
    );
  },
};

// burger.updateOne("Mushroom NO Bacon burger", 1);
// burger.selectAll();
// burger.insertOne("Fried Burger", false);

module.exports = burger;
