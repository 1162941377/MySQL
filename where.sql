select * from employee
where ismale = 1

select * from department
where companyId in (1, 2)

select * from employee
where location is not null

select * from employee
where salary >= 10000

select * from employee
where salary between 10000 and 12000

select * from employee
where `name` like '%袁%'

select * from employee
where `name` like '袁%'

select * from employee
where `name` like '袁_' and ismale = 0 and salary >= 10000

select * from employee
where `name` like '_云' and (ismale = 1 and salary >= 12000) or birthday >= '1978-12-24'
