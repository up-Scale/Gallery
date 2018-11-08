const faker = require('faker');

var randomProduct = faker.commerce.product;
var imgBase = 'https://picsum.photos/200/300/?'
var randomNum = faker.random.number;

function prodImgUrlsNum() {
  min = Math.ceil(0);
  max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

const jsonCreator = () => {
  const num = prodImgUrlsNum();
  let prodImages = []
  for (let i = 0; i < num; i++) {
    prodImages.push(`${imgBase}${randomNum()}`);
  };

  let json = {};
  json["productName"] = `${randomProduct()}${randomNum()}}`;
  json["bannerImageUrl"] = `${imgBase}${randomNum()}`;
  json["productImageUrls"] = prodImages;
  return json;
}

exports.jsonCreator = jsonCreator;