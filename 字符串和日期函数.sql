select count_ws('@', `name`, salary)
from employee

select curdate()

select curtime()

select timestampdiff(day, '2000-12-24 12:24:00', '2020-12-24 12:24:00')

select *,
timestampdiff(year, birthday, curdate()) as age
from employee
order by age
