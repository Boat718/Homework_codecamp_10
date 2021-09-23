select customer_name,sum(balance) from depositor d left join account A on d.account_number = a.account_number
group by d.customer_name;