# 数据库

_为了解决内存和磁盘之间的存储格式不一致的问题_

> 持久化地存储数据，将数据保存到磁盘中

> 备份和恢复数据

> 快速地读取数据

> 权限控制

## 类型

1）关系型数据库

> 特点：以表和表的关联构成的数据结构

> 优点：能表达复杂的数据关系；强大的查询语言，能准确地查找想要的数据

> 缺点：读写能力比较差，尤其是海量的数据的读写；数据结构比较死板

> 用途：存储结构复杂的数据

> 代表：Oracle、MySQL、SQL Server

2）非关系型数据库

> 特点：以极其简单的结构存储数据，比如：文档型、键值对

> 优点：格式灵活；海量的数据的读写效率高

> 缺点：难以表达复杂的数据结构；对于复杂的查询效率不好

> 用途：存储结构简单的数据

> 代表：MongoDB、Redis、Membase

3）面向对象型数据库

> 略，一般是 java、c# 等面向对象类的强势类型语言使用

## 术语

1）DB：database，数据库

2）DBA：database administrator，数据库管理员

3）DBMS：database management system，数据库管理系统

4）DBS：database system，数据库系统

> DBS 包含 BD、BDA、BDMS

## MySQL

> 关系型数据库

> 原本是瑞典 MySQL AB 公司的，后被 Oracle 收购

> 开源、轻量、快速

### 使用命令

_在每条语句结束后，都要加上分号_

> mysql -uroot -p 进入 mysql 命令交互

> show variables like 'character\_set\_%'; 查看当前数据库的字符编码

> 为了更好的存储数据，一致采用 utf8mb4，是 utf8 的升级版，表示汉字最多可以存储四个字符，包含生僻字

> 修改 my.ini 文件中的默认字符编码

> 重启 mysql 服务

```yaml mysql80是安装的时候，给的命名
net stop mysql80

net start mysql80
```

> show databases; 查看当前拥有的数据库

> 系统自带的数据库为：

- information_schema

- mysql

- performance_schema

- sys

### Navicat

> 更友好的图形化管理数据库的软件
