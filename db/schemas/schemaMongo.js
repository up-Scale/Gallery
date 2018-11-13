const db = require('../index.js');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    unique: true,
    index: true
  },
  bannerImageUrl: String,
  productImageUrls: String
}, { strict: true });

const Product = mongoose.model('Product', productSchema, 'Products');

exports.Product = Product;