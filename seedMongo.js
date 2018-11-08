console.log('Seeding MongoDB');

const db = require('./db/index.js');
const { createProductRecord, getProductRecord, modifyProductRecord, deleteProductRecord } = require('./server/models/mongoModel.js');
const { jsonCreator } = require('./dataGenerator.js')

let NUM_RECORDS = 10;

const seedMongoDB = () => {
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

seedMongoDB();

setTimeout(process.exit, 1000)