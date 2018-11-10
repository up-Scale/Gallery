const faker = require('faker');
const fs = require('fs');
const server = require('http').createServer();

var randomProduct = faker.commerce.product;
var imgBase = 'https://picsum.photos/200/300/?'
var randomNum = faker.random.number;

// createCSV = (data) => {
//   fs.appendFile('db/products.csv', data, (err) => {
//     if (err) console.log('Error:', err);
//   });
// };

// createCSV = (data) => {
//   var stream = fs.createWriteStream('db/products.csv');
//   stream.write(data);
// };


prodImgUrlsNum = () => {
  min = Math.ceil(0);
  max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

// dataGenerator = () => {
//   const num = prodImgUrlsNum();
//   let prodImages = []
//   for (let i = 0; i < num; i++) {
//     prodImages.push(`${imgBase}${randomNum()}`);
//   };

//   let json = {};
//   json["productName"] = `${randomProduct()}${randomNum()}}`;
//   json["bannerImageUrl"] = `${imgBase}${randomNum()}`;
//   json["productImageUrls"] = prodImages;
//   return json;
// };

dataGenerator = () => {
  const num = prodImgUrlsNum();
  let prodImages = []
  for (let i = 0; i < num; i++) {
    prodImages.push(`${imgBase}${randomNum()}`);
  };

  return `{"productName": ${randomProduct()}${randomNum()}, "bannerImageUrl": ${imgBase}${randomNum()}, "productImageUrls": ${prodImages}},`;
};

// productNameGenerator = () => {
//   return `${randomProduct()}${randomNum()}`;
// };

// bannerImageUrlGenerator = () => {
//   return `${imgBase}${randomNum()}`;
// };

// productImageUrlsGenerator = () => {
//   const num = prodImgUrlsNum();
//   let prodImages = []
//   for (let i = 0; i < num; i++) {
//     prodImages.push(`${imgBase}${randomNum()}`);
//   };
//   return prodImages;
// };


var stream = fs.createWriteStream('db/products.csv', { flags: 'a' });
puttingItAllTogether = () => {
  let data = '';
  for (let i = 0; i < 1000000; i++) {
    data += dataGenerator();
  }
  stream.write(data);
  data = null;
};

runningMultipleTimes = () => {
  console.time(runningMultipleTimes);
  for (let j = 0; j < 10; j++) {
    console.log('starting batch', j);
    puttingItAllTogether();
    console.log('finishing batch', j);
    setTimeout(() => { }, 1000);
  }
  console.timeEnd(runningMultipleTimes);
}

runningMultipleTimes();

// exports.createCSV = createCSV;
exports.dataGenerator = dataGenerator;
// exports.productNameGenerator = productNameGenerator;
// exports.bannerImageUrlGenerator = bannerImageUrlGenerator;
// exports.productImageUrlsGenerator = productImageUrlsGenerator;