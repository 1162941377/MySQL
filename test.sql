-- 查询user表，得到账号为admin，密码为123456的用户
-- 登录

select * from user
where loginid = 'admin', loginpwd = '123455'

-- 查询员工表，按照员工的入职时间降序排序，并且使用分页查询
-- 查询第2页，每页10条数据
-- limit (page-1)*pagesize, pagesize

select * from employee
order by employee.joinDate desc
limit 10, 10

-- 查询工资最高的女员工

select * from employee
where ismale = 0
order by salary desc
limit 0, 1
