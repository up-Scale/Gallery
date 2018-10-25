
let mongoose = require('mongoose');
mongoose.connect(process.env.DB_PROVIDER || 'mongodb://127.0.0.1:27017/deltaDrop')

let db = mongoose.connection;
db.on('error', () => console.log('mongoose connection error'))
db.once('open', () => console.log('mongoose connection successful'))

let productSchema = mongoose.Schema({
  productName: {        
    type: String, 
    unique: true,
    index: true
  },
  bannerImageUrl: String,
  productImageUrls: [String]
}, {strict: true})

let Product = mongoose.model('Product', productSchema)

const createProductRecord = (json, cb) => {
  let product = new Product({ 
    productName: json.productName,
    bannerImageUrl: json.bannerImageUrl,
    productImageUrls: json.productImageUrls
  })
  product.save(function (err, product) {
    if (err) cb(err, null);
    cb(null, product)
  });
}

const getProductRecord = (name, cb) => {
  Product.findOne({productName: name}).exec((err, data) => {
    if(err) cb(err, null)
    let payload = {productName: data.productName, bannerImageUrl: data.bannerImageUrl, productImageUrls: data.productImageUrls}
    cb(null, payload)
  });
}

exports.createProductRecord = createProductRecord;
exports.getProductRecord = getProductRecord;