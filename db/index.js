
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
  // try {
    product.save(function (err, fluffy) {
      console.log(err)
      if (err) cb(err, null);
      // console.log(fluffy);
      cb(null, fluffy)
    });
  // } catch (e) {
  //   cb(err, null);
  // }
}

const getProductRecord = () => {

}

exports.createProductRecord = createProductRecord;
exports.getProductRecord = getProductRecord;