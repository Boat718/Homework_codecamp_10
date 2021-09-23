use boatrental;

select * from sailors where age = (select max(age) from sailors);