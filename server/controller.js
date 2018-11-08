const model = require('./model.js');

const getImages = (req, res) => {
  console.log('req.url is', req.url);
  let productName = req.url.split('/')[2];
  console.log(productName);
  model.getImages(productName, (response) => {
    console.log(response);
    res.send(response);
  })
}

module.exports.getImages = getImages;