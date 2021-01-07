const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ShellseaFS2020!",
  database: "burgers_db",
  port: 3306,
});

module.exports = connection;
