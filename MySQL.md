# 数据库

_为了解决内存和磁盘之间的存储格式不一致的问题_

> 持久化地存储数据，将数据保存到磁盘中

> 备份和恢复数据

> 快速地读取数据

> 权限控制

## 表记录的增删改查

> DML：Data Manipulation Language 数据操控语言

> create 增

> retrieve 查

> update 改

> delete 删

## 单表基本查询

> select from、where、order by、limit

_运行顺序：from、where、select、order by、limit_

> select：别名，case end 语句、distinct 语句

> where：=、in、is、is not、><>=<=、between and、and、or、like

> order by：默认是 asc，升序；desc，降序

> limit：n，m，表示的是跳过 n 条数据，取出 m 条数据

- 公式为：n = (pagesize - 1) \* pagesize ; m = pagesize
