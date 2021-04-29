const { Sequelize } = require("sequelize");
const { sqlLogger } = require("../logger");

const sequelize = new Sequelize("myschooldb", "root", "Zjc5375200", {
  host: "localhost",
  dialect: "mysql", // 连接的数据名
  // logging: null, // 是否输出日志信息
  logging: (msg) => {
    sqlLogger.debug(msg);
  },
});

module.exports = sequelize;
