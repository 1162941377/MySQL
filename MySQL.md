# 数据库

_为了解决内存和磁盘之间的存储格式不一致的问题_

> 持久化地存储数据，将数据保存到磁盘中

> 备份和恢复数据

> 快速地读取数据

> 权限控制

## 函数

### 内置函数

#### 数学：

- abs（x）：返回 x 的绝对值

- ceil（x）：返回的是大于 x 的最小整数值

- floor（x）：返回的是小于 x 的最大整数值

- mod（x，y）：返回 x/y 的模（余数）

- pi（）：返回的是圆周率

- pand（）：返回的是 0-1 之间的随机值

- round（x，y）：返回的是参数 x 的四舍五入的 y 位小数的值

- truncate（x，y）：返回的是数字 x 截短为 y 位的小数的值

#### 聚合：

- avg（col）：返回指定列的平均值

- count（col）：返回指定列中非 null 值的个数

- min（col）：返回指定列的最小值

- max（col）：返回指定列的最大值

- sum（col）：返回指定列的所有值之和

##### 字符

- concat（str）：将参数中的字符串拼接成一个总的字符串

- concat_ws（sep，str）：将参数中的字符串拼接，并用 sep 字符间隔

- trim（str）：去除字符串中首部和尾部的所有空格

- ltrim（str）：去除字符串中的开头的所有空格

- rtirm（str）：去除字符串中的尾部的所有空格

#### 日期

- curdate 或 current_date（）：返回的是当前日期

- curtime 或 current_time（）：返回的是当前时间

- timestampdiff（part，date1，date2）：返回的是 date1 到 date2 之间的间隔的值，part 用于指定相隔的年或月或日等

1）microsecond：毫秒

2）second：秒

3）minute：分

4）hour：时

5）day：天

6）week：周

7）month：月

8）quarter：一刻钟

9）year：年

### 自定义函数（略）

## 分组

> 运行顺序：from、join ... on、where、group by、select、having、order by、limit

> 分组后，只能查询分组的列和聚合列
