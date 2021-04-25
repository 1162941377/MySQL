-- 左连接
select *
from department as d left join employee as e
on d.id = e.deptId

-- 右连接
select *
from employee as e right join department as d
on e.deptId = d.id

-- 内连接
select e.`name` as ename, d.`name` as dptname, c.`name` as companyname
from employee as e
inner join department as d
on d.id = e.deptId
inner join company c
on d.companyId = c.id
