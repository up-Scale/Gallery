const Sequelize = require('sequelize');
const db = require('../../db/index.js');

const createProductRecord = (json, cb) => {
  let query = `INSERT INTO public.products ("productName", "bannerImageUrl", "images") VALUES ('${json.productName}', '${json.bannerImageUrl}', '${json.images}')`;
  db.query(query, { plain: true})
    .then(result => { cb(null, result) })
    .catch(error => { cb(error, null) })
};

const getProductRecord = (id, cb) => {
  let query = `SELECT * FROM public.products WHERE "id" = '${id}';`;
  db.query(query, { plain: true})
    .then(result => {
      cb(null, result)
    })
    .catch(error => {
      cb(error, null)
    })
};

const modifyProductRecord = (id, newInfo, cb) => {
  let key = Object.keys(newInfo);
  let value = Object.values(newInfo);
  let query = `UPDATE public.products SET ${key} = '${value}' WHERE "id" = '${id}';`;
  db.query(query, { plain: true})
    .then(result => { cb(null, result) })
    .catch(error => { cb(error, null) })
};

const deleteProductRecord = (id, cb) => {
  let query = `DELETE FROM public.products WHERE "id" = '${id}';`;
  db.query(query, { plain: true})
    .then(result => { cb(null, result) })
    .catch(error => { cb(error, null) })
};

module.exports.createProductRecord = createProductRecord;
module.exports.getProductRecord = getProductRecord;
module.exports.modifyProductRecord = modifyProductRecord;
module.exports.deleteProductRecord = deleteProductRecord;