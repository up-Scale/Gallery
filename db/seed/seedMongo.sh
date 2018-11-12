mongo upScale --eval "db.dropDatabase()"
mongo upScale --eval "db.Products.createIndex( { \"productName\": 1 }, { unique: true } )"
time mongoimport -d 'upScale' -c 'Products' --type csv --file db/products.csv --headerline --ignoreBlanks
mongo upScale --eval "db.Products.count()"