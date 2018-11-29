// const { getProductRecord, createProductRecord, modifyProductRecord, deleteProductRecord } = require('./models/mongoModel.js');
const { getProductRecord, createProductRecord, modifyProductRecord, deleteProductRecord } = require('./models/psqlModel.js');

module.exports = {
  postController: (req, res) => {
    createProductRecord(req.body, (error, response) => {
      if (error) {
        res.send(error);
      } else {
        res.send(response);
        res.flush()
      }
    });
  },

  getController: (req, res) => {
    let productName = req.url.split('/')[2];
    getProductRecord(productName, (error, response) => {
      if (error) {
        res.send(error);
      } else {
        res.send(response);
        res.flush()
      }
    });
  },

  putController: (req, res) => {
    let productName = req.url.split('/')[2];
    let newInfo = req.body;
    modifyProductRecord(productName, newInfo, (error, response) => {
      if (error) {
        res.send(error);
      } else {
        res.send(response);
        res.flush()
      }
    });
  },

  deleteController: (req, res) => {
    let productName = req.url.split('/')[2];
    deleteProductRecord(productName, (error, response) => {
      if (error) {
        res.send(error);
      } else {
        res.send(response);
        res.flush()
      }
    });
  }
};