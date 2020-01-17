-- use sock_db
\c sock_db
-- tables
\i ./tables/1_products.sql
\i ./tables/2_users.sql
\i ./tables/3_orders.sql
\i ./tables/4_order_items.sql
-- seeds
\i ./seeds/1_product_seed.sql
\i ./seeds/2_user_seed.sql