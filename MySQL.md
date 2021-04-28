# 数据库

_为了解决内存和磁盘之间的存储格式不一致的问题_

> 持久化地存储数据，将数据保存到磁盘中

> 备份和恢复数据

> 快速地读取数据

> 权限控制

## 模拟数据

> 通常使用 Mock.js，生成随机数据或拦截 ajax 请求

> 数据模板中文档每个属性都是由三部分构成：属性名、生成规则、属性值

### 生成规则

1）'name|min-max': value

2）'name|count': value

3）'name|min-max.dmin-dmax': value

4）'name|min-max.dcount': value

5）'name|count.dmin-dmax': value

6）'name|count.dcount': value

7）'name|+step': value

> 生成规则的含义需要依赖属性值的类型才能确定

> 属性值中还可以含有 @占位符

- 占位符也可以 引用数据模板 中的属性

- 占位符会 优先引用数据模板 中的属性

- 占位符支持 相对路径 和 绝对路径

> 属性值还指定了最终值的初始值和类型

> 属性值的类型：

1）String：字符串

2）Number：数字

3）Boolean：布尔

4）Object：对象

5）Array：数组

6）Function：函数

7）RegExp：正则表达式

> 详情请见：https://github.com/nuysoft/Mock/wiki
