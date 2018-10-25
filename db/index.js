
let mongoose = require('mongoose');
mongoose.connect(process.env.DB_PROVIDER || 'mongodb://127.0.0.1:27017/deltaDrop')

let db = mongoose.connection;
db.on('error', () => console.log('mongoose connection error'))
db.once('open', () => console.log('mongoose connection successful'))

let productSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  }, 
  productName: String,
  bannerImageUrl: String,
  productImageUrls: [String]
})

// let imageSchema = mongoose.Schema({
//   _id: {
//     type: mongoose.Schema.Types.ObjectId,
//     index: true,
//     required: true,
//     auto: true,
//   }, 
//   imageUrl: String
// })

let Product = mongoose.model('Product', productSchema)
// let Image = mongoose.model('Image', imageSchema)

// method to pull images for a specific product
const createProductRecord = (json) => {
  let product = new Product({ 
    productName: json.productName,
    bannerImageUrl: json.bannerImageUrl,
    productImageUrls: json.productImageUrls
  })
  product.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log('product saved');
    console.log(fluffy);
  });
}

const getProductRecord = () => {

}

exports.createProductRecord = createProductRecord;
exports.getProductRecord = getProductRecord;