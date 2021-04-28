# 数据库

_为了解决内存和磁盘之间的存储格式不一致的问题_

> 持久化地存储数据，将数据保存到磁盘中

> 备份和恢复数据

> 快速地读取数据

> 权限控制

## Sequelize

> 创建实例：通过 build 或 create 方法，而不是 new 关键字

1）build：创建的时候，不会保存任何数据，而是通过 save 方法后，才会执行语句

2）create：将 build 和 save 结合，更方便快捷

_build 创建的时候，只是一个单纯的对象，所以也不是异步的；create 创建的时候，是异步_

> 实例记录：模型记录到 console.log()中会产生很多问题，建议使用 toJSON 或 JSON.stringify 方法

> 删除实例：通过 destroy 方法

> 重载实例：通过 reload 方法

```js
const jane = await User.create({ name: "Jane" });
console.log(jane); // 不要这样！
console.log(jane.toJSON()); // 这样最好！
console.log(JSON.stringify(jane.null, 4)); // 这样也不错！
```

## 三层架构

> 分为：

1）路由层（route）、模型层（modles）、API 层：提供对外的 API 接口

2）服务层（services）：处理业务逻辑的支持

3）数据访问层（DAO）：与数据库和其它设备之间的持久通信，通常为 ORM
