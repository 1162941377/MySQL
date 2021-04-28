require("./models/relation");

const stuServ = require("./services/studentServices");

// stuServ.getStudentById(1).then((res) => {
//   console.log(res);
// });

stuServ.getStudents(1, 10, false, "秀").then((res) => {
  console.log(res);
});
