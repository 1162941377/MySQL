# 数据库

_为了解决内存和磁盘之间的存储格式不一致的问题_

> 持久化地存储数据，将数据保存到磁盘中

> 备份和恢复数据

> 快速地读取数据

> 权限控制

## Sequelize

### ORM

> Object Relation Mapping 对象关系映射

> 通过 ORM 框架，可以自动地把程序中的对象和数据库关联

> ORM 框架会隐藏具体的数据库底层细节，让开发者使用相同的数据库接口，完成对不同数据库的操作，见源码中的【ORM 原理图】

> ORM 的优势：

1）开发者不用关系数据库，仅需关心对象

2）可轻易地完成数据库的移植

3）无需拼接复杂的 sql 语句即可精确地完成查询

### Node 中的 ORM

> Sequelize：JS、TS、成熟

> TypeORM：TS，不成熟

> 两种大体上一样，建议使用 Sequelize

> 记得安装对应的数据库的库，配合 Sequelize 使用

```js 测试连接，使用 authenticate() 函数
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
```

### 术语约定

> Sequelize 是指库本身，sequelize 是指 Sequelize 实例，它表示与一个数据库的连接

> new Sequelize 的时候，需要传递第一个参数为要创建的数据库名，第二个参数为要连接的数据库的账号，第三个参数为要连接的数据库的密码，第四个参数为一个对象：host（地址）、dialect（要连接的数据库）、logging（日志）

> Sequelize 提供的大多数方法都是异步的，因此返回的是 Promise 对象

### 模型基础

> 通过设置 freezeTableName 为 true 停止 Sequelize 执行自动复数化

> 通过设置 tableName 的值，来指定表名

> 模型同步：sync() 函数

- sync()：如果表不存在，则创建该表；如果存在，不执行任何操作

- sync({ force: true })：将创建表，如果表存在，则将其先删除

- sync({ alter: true })：将创建表，如果存在，则进行判断，对其进行修改，推荐使用

- 同步一般是一起同步，所以使用 sequelize.sync({ alter: true })

> 通过设置 timestamps 的值，来指定是否显示 createAt（创建的时间戳） 和 updatedAt（最近更新的时间戳）；creaetedAt 或 updatedAt 的值来指定是否显示，也可以重命名；为了更好的安全性考虑，通常使用 paranoid 为 true，表示该表的数据不会真正删除，而是会新增一列 deletedAt，记录删除时间

> 如果关于列的唯一指定内容是其数据类型，则可以进行简写，省略 type

> 默认情况下，Sequelize 假定列的默认值为 null，可以通过 defaultValue 传递给列定义来更改此行为

> 数据类型，使用前先导入

> Sequelize 模型是 es6 类
