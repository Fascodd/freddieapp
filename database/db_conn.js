const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Boler00ffir322@",
  database: "freddyapp",
  multipleStatements: true,
});
module.exports = connection;
