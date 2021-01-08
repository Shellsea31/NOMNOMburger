const connection = require("./connection");

// create the methods that will execute the necessary MySQL commands in the controllers.
const orm = {
  selectAll(table) {
    connection.query("SELECT * FROM ??", [table], (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  },
  insertOne(table, param1, param2, param1Val, param2Val) {
    connection.query(
      "INSERT INTO ?? (??, ??) VALUES (?, ?)",
      [table, param1, param2, param1Val, param2Val],
      (err, data) => {
        if (err) throw err;
        console.log(data);
      }
    );
  },
  updateOne(table, column, colVal, condition, condVal) {
    connection.query(
      "UPDATE ?? SET ?? = ? WHERE ?? = ?",
      [table, column, colVal, condition, condVal],
      (err, data) => {
        if (err) throw err;
        console.log(data);
      }
    );
  },
};

module.exports = orm;
