const Sequelize = require('sequelize');
const db = require('../../db/index.js');

const createProductRecord = (json, cb) => {
  console.log(json);
  let query = `INSERT INTO public.products (productname, bannerimageurl, productimageurls) VALUES ('${json.productName}', '${json.bannerImageUrl}', '${json.productImageUrls}')`;
  // let query = `SELECT * FROM json_populate_record(NULL::"TEST", '${JSON.stringify(json)}');`
  db.query(query, { plain: true})
    .then(result => { cb(null, result) })
    .catch(error => { cb(error, null) })
};

const getProductRecord = (name, cb) => {
  let query = `SELECT * FROM public.products WHERE productname = '${name}';`;
  db.query(query, { plain: true})
    .then(result => { cb(null, result) })
    .catch(error => { cb(error, null) })
};

const modifyProductRecord = (name, newInfo, cb) => {
  console.log(newInfo);
  console.log(typeof newInfo);
  let key = Object.keys(newInfo);
  let value = Object.values(newInfo);
  let query = `UPDATE public.products SET ${key} = '${value}' WHERE productname = '${name}';`;
  db.query(query, { plain: true})
    .then(result => { cb(null, result) })
    .catch(error => { cb(error, null) })
};

const deleteProductRecord = (name, cb) => {
  let query = `DELETE FROM public.products WHERE productname = '${name}';`;
  db.query(query, { plain: true})
    .then(result => { cb(null, result) })
    .catch(error => { cb(error, null) })
};

module.exports.createProductRecord = createProductRecord;
module.exports.getProductRecord = getProductRecord;
module.exports.modifyProductRecord = modifyProductRecord;
module.exports.deleteProductRecord = deleteProductRecord;