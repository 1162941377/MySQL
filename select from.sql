select id, loginId, loginPwd, 'demo' as 'additional'
from `user`

select ismale 'sex' from `employee`

select *, 'demo' as 'extra' from `employee`

select id,
case ismale
when 1 then 'male'
else 'female'
end sex,
salary
from employee

select id, `name`, 
case
when ismale = 1 then 'male'
else 'female'
end `sex`, 
case
when salary>=10000 then 'high'
when salary>=5000 then 'middle'
else 'lower'
end `level`,
salary
from employee
