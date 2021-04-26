select avg(salary) as `avg`, id
from employee

-- 查询员工数量
select count(id)
from employee

select count(id) as 员工数量,
avg(salary) as 平均薪资,
sum(salary) as 总薪资,
min(salary) as 最低薪资,
max(salary) as 最高薪资
from employee
