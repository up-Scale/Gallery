
let mongoose = require('mongoose');
mongoose.connect(process.env.DB_PROVIDER || 'mongodb://127.0.0.1:27017/deltaDrop')

let db = mongoose.connection;

db.on('error', () => console.log('mongoose connection error'))
db.once('open', () => console.log('mongoose connection successful'))

const productSchema = mongoose.Schema({
  productName: {        
    type: String, 
    unique: true,
    index: true
    },
  bannerImageUrl: String,
  productImageUrls: String
  }, {strict: true})

const Product = mongoose.model('Product', productSchema)

const createProductRecord = (json, cb) => {
  const product = new Product({ 
    productName: json.productName,
    bannerImageUrl: json.bannerImageUrl,
    productImageUrls: json.productImageUrls
  }).save(function (err, product) {
    if (err) cb(err, null);
    cb(null, product)
  });
}

const getProductRecord = (name, cb) => {
  Product.findOne({productName: name}).exec((err, data) => {
    if(err) cb(err, null)
    const payload = {
      bannerImageUrl: data.bannerImageUrl, 
      images: data.productImageUrls
    }
    cb(null, payload)
  });
}

exports.createProductRecord = createProductRecord;
exports.getProductRecord = getProductRecord;