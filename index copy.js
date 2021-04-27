const mysql = require("mysql2");

// 创建一个数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Zjc5375200",
  database: "demo",
});

connection.query("select * from company", (error, result) => {
  console.log(result);
});
