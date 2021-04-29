require("./models/relation");

const adminServ = require("./services/adminServices");

// adminServ.addAdmin({
//   loginId: "zjc",
//   loginPwd: "666",
// });

// adminServ.addAdmin({
//   loginId: "wh",
//   loginPwd: "666",
// });

adminServ.login("zjc", "666").then((res) => {
  console.log(res);
}); // 查询成功

adminServ.login("zjc", "zjc").then((res) => {
  console.log(res);
}); // 结果为null
