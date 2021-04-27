const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Zjc5375200",
  database: "demo",
  multipleStatements: true,
});

async function test(id) {
  // 创建一个数据库连接
  const sql = `select * from employee where \`name\` like concat('%', ?, '%')`;
  const [results] = await pool.execute(sql, [id]);
  console.log(results);
  pool.end();
}

test("袁");
