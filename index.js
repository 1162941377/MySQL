require("./models/relation");

const bookServ = require("./services/bookServices");

// bookServ.getBookById(1).then((res) => {
//   console.log(res);
// });

bookServ.getBooks(1, 10, "王").then((res) => {
  console.log(res);
});
