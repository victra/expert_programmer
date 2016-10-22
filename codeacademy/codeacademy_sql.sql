/* use case on sql */
select *,
  case name
    when 'kale-smoothie'    then 'smoothie'
    when 'banana-smoothie'  then 'smoothie'
    when 'orange-juice'     then 'drink'
    when 'soda'             then 'drink'
    when 'blt'              then 'sandwich'
    when 'grilled-cheese'   then 'sandwich'
    when 'tikka-masala'     then 'dinner'
    when 'chicken-parm'     then 'dinner'
     else 'other'
  end as category
from order_items
order by id
limit 100;

/* delete duplicate field */
SELECT DISTINCT column_name FROM table_name;

/* delete duplicate field and count that */
SELECT COUNT(DISTINCT column_name) AS some_alias FROM table_name

/* use with */
with daily_revenue as (
  select
    date(created_at) as dt,
    round(sum(price), 2) as rev
  from purchases
  where refunded_at is null
  group by 1
)
select * from daily_revenue order by dt;
output:
dt           rev
2015-08-04  41.5
2015-08-05  53.0

/* with and join */
with daily_revenue as (
  select
    date(created_at) as dt,
    round(sum(price), 2) as rev
  from purchases
  where refunded_at is null
  group by 1
), 
daily_players as (
  select
    date(created_at) as dt,
    count(distinct(user_id)) as players
  from gameplays
  group by 1
)
select
  daily_revenue.dt,
  daily_revenue.rev / daily_players.players
from daily_revenue
  join daily_players on daily_revenue.dt = daily_players.dt;
output:
dt  daily_revenue.rev / daily_players.players
2015-08-04  0.419191919191919
2015-08-05  0.452991452991453

/* with and join other way */
with daily_revenue as (
  select
    date(created_at) as dt,
    round(sum(price), 2) as rev
  from purchases
  where refunded_at is null
  group by 1
), 
daily_players as (
  select
    date(created_at) as dt,
    count(distinct(user_id)) as players
  from gameplays
  group by 1
)
select
  daily_revenue.dt,
  daily_revenue.rev / daily_players.players
from daily_revenue
  join daily_players using (dt);
output:
dt  daily_revenue.rev / daily_players.players
2015-08-04  0.419191919191919
2015-08-05  0.452991452991453

/*