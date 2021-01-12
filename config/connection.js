const mysql = require("mysql");

const connection = mysql.createConnection({
  // host: "localhost",
  user: "root",
  password: "ShellseaFS2020!",
  database: "burgers_db",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
