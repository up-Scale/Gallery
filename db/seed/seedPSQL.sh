# psql postgres 
psql -d postgres -c "DROP TABLE IF EXISTS products"
psql -d postgres -c "DROP TABLE IF EXISTS temp"
psql -h localhost -d postgres -p 5432 -a -q -f db/schemas/schemaPSQL.sql
psql -d postgres -c "\copy \"temp\" FROM 'db/smalltest.csv' delimiter ',' csv header"
psql -d postgres -c "INSERT INTO products SELECT * FROM temp ON CONFLICT DO NOTHING"

times