const faker = require('faker');
const fs = require('fs');
var stream = require('stream');

var randomProduct = faker.commerce.product;
var randomSuffix = faker.lorem.word;
var imgBase = 'https://picsum.photos/200/300/?'
var randomNum = faker.random.number;

prodImgUrlsNum = () => {
  min = Math.ceil(0);
  max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

singleData = () => {
  const num = prodImgUrlsNum();
  let prodImages = ''
  for (let i = 0; i < num; i++) {
    if (i < num - 1) {
      prodImages += `${imgBase}${randomNum()}-`;
    } else if (i = num) {
      prodImages += `${imgBase}${randomNum()}`;
    }
  };
  return `${randomProduct()}${randomNum()}${randomSuffix()}${randomNum()}, ${imgBase}${randomNum()}, ${prodImages}
`;
};

var stream = fs.createWriteStream('db/smalltest.csv', { flags: 'a' });
stream.write(`"productName", "bannerImageUrl", "productImageUrls"
`);

bulkData = () => {
  let data = '';
  for (let i = 0; i < 10000; i++) {
    data += singleData();
  }
  stream.write(data);
  data = null;
};

dataGenerator = (thisRound, totalRounds) => {
  console.time('data generation took');
  console.log('begin');
  stream.on('drain', () => {
    if (thisRound < totalRounds) {
      thisRound++;
      console.log(thisRound);
      bulkData();
    } else {
      console.timeEnd('data generation took');
    }
  });
  bulkData();
};

dataGenerator(0, 3);