const { createCSV, dataGenerator, productNameGenerator, bannerImageUrlGenerator, productImageUrlsGenerator } = require('../dataGenerator.js');

puttingItAllTogether = () => {
  for (let i = 0; i < 1000; i++) {
    let data = ''
    for (let j = 0; j < 10000; j++) {
      let obj = dataGenerator();
      data += obj;
    }
    createCSV(data);
  }
};

puttingItAllTogether();