const Mock = require("mockjs");

// 随机生成数据
const result = Mock.mock({
  "datas|17": [
    {
      "id|+1": 1,
      name: "前端第 @id 期",
      openDate: "@date",
    },
  ],
}).datas;

// console.log(result);
// 引入 Class 表，将数据插入
const Class = require("../models/Class");
Class.bulkCreate(result);
