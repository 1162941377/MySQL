require("./init");

const stuServ = require("./services/studentServices");

stuServ.getStudents().then((res) => {
  console.log(res);
});
