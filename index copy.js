require("./models/relation");

const adminServ = require("./services/adminServices");

// adminServ.getAdminById(1).then((res) => {
//   console.log(res);
// });

adminServ.getAdmins().then((res) => {
  console.log(res);
});
