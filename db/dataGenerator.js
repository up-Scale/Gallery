const faker = require('faker');
const fs = require('fs');
var stream = require('stream');

var randomProduct = faker.commerce.product;
var randomSuffix = faker.lorem.word;
var imgBase = `https://picsum.photos/200/300/?`
var randomNum = faker.random.number;

singleData = () => {
  const num = Math.floor(Math.random() * (11));
  let prodImages = ''
  for (let i = 0; i < num; i++) {
    if (i < num - 1) {
      prodImages += `${imgBase}${randomNum()}-`;
    } else if (i = num) {
      prodImages += `${imgBase}${randomNum()}`;
    }
  };
  return `${randomProduct()}${randomNum()}${randomSuffix()}${randomNum()},${imgBase}${randomNum()},${prodImages}
`;
};

var stream = fs.createWriteStream('db/products.csv', { flags: 'a' });
stream.write(`"productName","bannerImageUrl","images"
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

dataGenerator(1, 1000);