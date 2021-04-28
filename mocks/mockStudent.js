const Mock = require("mockjs");

// 随机生成数据
const result = Mock.mock({
  "datas|500-700": [
    {
      name: "@cname",
      birthday: "@date",
      "sex|1": true,
      mobile: /1\d{10}/,
      "ClassId|1-17": 0,
    },
  ],
}).datas;

// console.log(result);
// 引入 Student 表，并插入数据
const Student = require("../models/Student");
Student.bulkCreate(result);
