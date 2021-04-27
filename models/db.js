const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("myschooldb", "root", "Zjc5375200", {
  host: "localhost",
  dialect: "mysql", // 连接的数据名
  logging: null, // 是否输出日志信息
});

module.exports = sequelize;