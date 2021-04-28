// 引入两张要关联的表
const Student = require("./Student");
const Class = require("./Class");

// 定义关联性
Class.hasMany(Student);
Student.belongsTo(Class);
