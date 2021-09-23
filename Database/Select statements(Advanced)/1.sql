use banking;

select a.account_number from branch B left join account a on B.branch_name = a.branch_name where b.branch_city = "Riverside";