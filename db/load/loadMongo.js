// console.log('Seeding MongoDB');

// const db = require('../index.js');
// const { Product } = require('./db/schemas/schemaMongo.js')
// const { createProductRecord, getProductRecord, modifyProductRecord, deleteProductRecord } = require('../../server/models/mongoModel.js');
// const { jsonCreator } = require('../dataGenerator.js');

// let NUM_RECORDS = 1000;

// const seedMongo = () => {
//   for (let i = 0; i < NUM_RECORDS; i++) {
//     let item = jsonCreator();
//     createProductRecord(item, (error, result) => {
//       if (error) {
//         console.log('Error:', error);
//       } else {
//         console.log(`Product number ${i}, ${item.productName} created`)
//       }
//     });
//   };
// }

// seedMongo();

// setTimeout(process.exit, 1000);

// const { createCSV, dataGenerator, productNameGenerator, bannerImageUrlGenerator, productImageUrlsGenerator } = require('../dataGenerator.js');
// const fs = require('fs');

// puttingItAllTogether = () => {
//   for (let i = 0; i < 1; i++) {
//     let data = ''
//     for (let j = 0; j < 10000000; j++) {
//       let obj = dataGenerator();
//       data += obj;
//     }
//     createCSV(data);
//   }
// };

// puttingItAllTogether = () => {
//   let data = ''
//   for (let j = 0; j < 2000000; j++) {
//     let obj = dataGenerator();
//     data += obj;
//   }
//   createCSV(data);
// };