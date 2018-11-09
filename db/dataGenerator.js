const faker = require('faker');
const fs = require('fs');

var randomProduct = faker.commerce.product;
var imgBase = 'https://picsum.photos/200/300/?'
var randomNum = faker.random.number;

createCSV = (data) => {
  fs.appendFile('db/products.txt', data, (err) => {
    if (err) console.log('Error:', err);
  });
};

prodImgUrlsNum = () => {
  min = Math.ceil(0);
  max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

dataGenerator = () => {
  const num = prodImgUrlsNum();
  let prodImages = []
  for (let i = 0; i < num; i++) {
    prodImages.push(`${imgBase}${randomNum()}`);
  };

  // let json = {};
  // json["productName"] = `${randomProduct()}${randomNum()}}`;
  // json["bannerImageUrl"] = `${imgBase}${randomNum()}`;
  // json["productImageUrls"] = prodImages;
  // return json;

  return `{"productName": ${randomProduct()}${randomNum()}, "bannerImageUrl": ${imgBase}${randomNum()}, "productImageUrls": ${prodImages}},`;
}

puttingItAllTogether = () => {
  for (let i = 0; i < 100; i++) {
    let data = ''
    for (let j = 0; j < 100; j++) {
      let obj = dataGenerator();
      data += obj;
    }
    createCSV(data);
  }
};

puttingItAllTogether();

exports.dataGenerator = dataGenerator;