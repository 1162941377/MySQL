const mysql = require("mysql2");

function test(id) {
  // 创建一个数据库连接
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Zjc5375200",
    database: "demo",
    multipleStatements: true,
  });

  connection.query(`select * from company where id=${id}`, (error, result) => {
    console.log(result);
  });

  connection.end();
}

test(`''; delete from company where id = 7`);
