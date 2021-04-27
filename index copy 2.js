const mysql = require("mysql2/promise");

async function test() {
  // 创建一个数据库连接
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Zjc5375200",
    database: "demo",
  });

  const [results] = await connection.query("select * from company");
  console.log(results);
  connection.end();
}

test();
