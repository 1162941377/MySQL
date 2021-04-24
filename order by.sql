select *,
case ismale
when 1 then 'male'
else 'female'
end sex from employee
order by sex desc, salary asc
