-- 查询员工分布的居住地，以及每个居住地有多少名员工
-- 天府三街
select location, count(id) as empnumber
from employee
group by location
having empnumber >= 40

-- 查询所有薪水在10000以上的员工的分布的居住地，然后仅得到聚集地大于30的结果
select location, count(id) as empnumber
from employee
where salary >= 10000
group by location
having count(id) >= 30
