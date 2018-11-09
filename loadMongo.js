console.log('Seeding MongoDB');

const db = require('./db/index.js');
const { Product } = require('./db/schemaMongo.js')
const { createProductRecord, getProductRecord, modifyProductRecord, deleteProductRecord } = require('./server/models/mongoModel.js');
const { jsonCreator } = require('./dataGenerator.js');

let NUM_RECORDS = 1000;

const seedMongo = () => {
  for (let i = 0; i < NUM_RECORDS; i++) {
    let item = jsonCreator();
    createProductRecord(item, (error, result) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log(`Product number ${i}, ${item.productName} created`)
      }
    });
  };
}

seedMongo();

setTimeout(process.exit, 1000);

module.exports.seedMongo = seedMongo();