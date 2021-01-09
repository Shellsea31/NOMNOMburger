const connection = require("./connection");

// create the methods that will execute the necessary MySQL commands in the controllers.
const orm = {
  selectAll(table, cb) {
    connection.query("SELECT * FROM ??", [table], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne(table, param1, param2, param1Val, param2Val, cb) {
    connection.query(
      "INSERT INTO ?? (??, ??) VALUES (?, ?)",
      [table, param1, param2, param1Val, param2Val],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
  updateOne(table, column, colVal, condition, condVal, cb) {
    connection.query(
      "UPDATE ?? SET ?? = ? WHERE ?? = ?",
      [table, column, colVal, condition, condVal],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
};

module.exports = orm;
