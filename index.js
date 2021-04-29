/* const moment = require("moment");
moment.locale("zh-cn"); // 转换为中国计时方式

// 得到当前时间，moment对象
// console.log(moment().toString());
// console.log(moment.utc().toString());

// 得到当前时间戳
// console.log(moment().valueOf(), +moment());
// console.log(moment.utc().valueOf(), +moment.utc());

// 根据指定的时间格式得到时间，时间格式：xxxx-xx-xx xxxx/xx/xx timestamp
// console.log(moment(0).toString(), +moment());
// console.log(moment.utc(0).toString(), +moment.utc(0));

// const value = "1970-01-01 00:00:00";
// console.log(moment(value).toString(), +moment(value));
// console.log(moment.utc(value).toString(), +moment.utc(value));

// 使用日期令牌转换
// 令牌是一个格式化的字符串，例如：YYYY-MM-DD HH:mm:ss
const formats = ["YYYY-MM-DD HH:mm:ss", "YYYY-M-D H:m:s", "x"]; // 表示的是格式可以使 年月日 时分秒，也可以是时间戳（毫秒）
// console.log(moment.utc("1970-01-01 00:00:00", formats, true).toString());
// console.log(moment.utc("1970-1-1 0:0:0", formats, true).toString());
// console.log(moment.utc(0, formats, true).toString());
// console.log(
//   moment.utc("Thu Apr 29 2021 09:49:58 GMT+0800", formats, true).toString()
// );

// const validMoment = moment.utc(
//   "Thu Apr 29 2021 09:49:58 GMT+0800",
//   formats,
//   true
// );
// console.log(validMoment.isValid()); // false
// console.log(validMoment.toString()); // Invalid date
// console.log(+validMoment); // NaN

// 显示（客户端）
// const m = moment.utc("2000-12-24 20:12:24", formats, true);
// console.log(m.local().format("YYYY年MM月DD日 HH点mm分ss秒"));

const m = moment.utc("2000-12-24 20:12:24", formats, true);
console.log(m.local().fromNow()); // 返回的是距离现在的时间差
 */

/* require("./init");

const stuServ = require("./services/studentServices");
stuServ
  .addStudent({
    name: "邹家淳",
    birthday: "2000-12-24",
    sex: true,
    mobile: "18556780474",
    ClassId: 2,
    deletedAt: "2021-04-19",
    a: 3,
    b: 4,
  })
  .catch((err) => {
    console.log(err);
  }); */

require("./init");

const stuServ = require("./services/studentServices");

stuServ.getStudents().then((res) => {
  console.log(res);
});
