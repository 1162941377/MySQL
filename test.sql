-- 1. 创建一张team表，记录足球队
-- 查询出对阵表
select t1.`name` as 主场, t2.`name` as 客场
from team as t1, team as t2
where t1.id != t2.id

-- 2. 显示出所有员工的姓名、性别（使用男或女显示）、入职时间、薪水、所属部门（显示部门名称）、所属公司（显示公司名称）
select e.`name` as 员工姓名
case ismale
when 1 then '男'
else '女'
end 性别,
e.joinDate 入职时间,
e.salary 薪水,
d.`name` 部门名称,
c.`name` 公司名称
from employee as e
inner join department as d on e.deptId = d.id
inner join company as c on d.companyId = c.id

-- 3. 查询腾讯和蚂蚁金服的所有员工姓名、性别、入职时间、部门名、公司名
select e.`name` 员工姓名
case ismale
when 1 then '男'
else '女'
end 性别,
e.joinDate 入职时间,
e.salary 薪水,
d.`name` 部门名称,
c.`name` 公司名称
from employee as e
inner join department as d on e.deptId = d.id
inner join company as c on d.companyId = c.id
where c.`name` in ('腾讯科技', '蚂蚁金服')

-- 4. 查询渡一教学部的所有员工姓名、性别、入职时间、部门名、公司名
select e.`name` 员工姓名
case ismale
when 1 then '男'
else '女'
end 性别,
e.joinDate 入职时间,
e.salary 薪水,
d.`name` 部门名称,
c.`name` 公司名称
from employee as e
inner join department as d on e.deptId = d.id
inner join company as c on d.company = c.id
where c.`name` like = '渡一' and d.`name` = '教学部'

-- 5. 列出所有公司员工居住的地址（要去掉重复）
select distinct location from employee
