const db = require('../db/index.js');

getImages = (productName, callback) => {
  db.getProductRecord(productName, (err, data) => {
    if (err) {
      if (err.message === '404') res.status(404).send(err)
      else res.status(500).send(err)
    }
    else {
      callback(data)
    }
  })
};

exports.getImages = getImages