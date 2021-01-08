const connection = require("./connection");

// create the methods that will execute the necessary MySQL commands in the controllers.
const orm = {
  selectAll(table) {
    connection.query("SELECT * FROM ??", [table], (err, data)=>{
      console.log(data);
    })
  },
  insertOne() {
    console.log("insert one");
  },
  updateOne() {
    console.log("update one");
  },
};

module.exports = orm;
