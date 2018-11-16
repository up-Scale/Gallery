const mongoose = require('mongoose');
const db = require('../../db/index.js');
const { Product } = require('../../db/schemas/schemaMongo.js');

const createProductRecord = (json, cb) => {
  const product = new Product({
    productName: json.productName,
    bannerImageUrl: json.bannerImageUrl,
    productImageUrls: json.productImageUrls
  }).save(function (err, product) {
    if (err) cb(err, null);
    cb(null, product)
  });
};

const getProductRecord = (name, cb) => {
  Product.findOne({ productName: name }).exec((err, data) => {
    if (err) cb(err, null)
    else if (!data) {
      cb(new Error('404'), null)
    } else {
      cb(null, data)
    }
  });
};

const modifyProductRecord = (name, newInfo, cb) => {
  Product.findOneAndUpdate({ productName: name }, newInfo).exec((err, data) => {
    if (err) cb(err, null)
    else if (!data) {
      cb(new Error('404'), null)
    } else {
      cb(null, data)
    }
  });
};

const deleteProductRecord = (name, cb) => {
  Product.deleteOne({ productName: name }).exec((err, data) => {
    if (err) cb(err, null)
    else if (!data) {
      cb(new Error('404'), null)
    } else {
      cb(null, data)
    }
  });
};

exports.Product = Product;
exports.createProductRecord = createProductRecord;
exports.getProductRecord = getProductRecord;
exports.modifyProductRecord = modifyProductRecord;
exports.deleteProductRecord = deleteProductRecord;