import { getProductRecord, createProductRecord, modifyProductRecord, deleteProductRecord } from './models/psqlModel.js';
import { client } from './index.js';

const postController = (req, res) => {
  createProductRecord(req.body, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
      res.flush()
    }
  });
};

const getController = (req, res) => {
  let productName = req.url.split('/')[2];
  getProductRecord(productName, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      client.setex(productName, 3600, JSON.stringify(response))
      res.send(response);
      res.flush()
    }
  });
};

const getCacheController = (req, res) => {
  let productName = req.url.split('/')[2];
  client.get(productName, (error, result) => {
    if (result) {
      res.send(result);
      res.flush()
    } else {
      getController(req, res);
    }
  });
};

const putController = (req, res) => {
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
};

const deleteController = (req, res) => {
  let productName = req.url.split('/')[2];
  deleteProductRecord(productName, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
      res.flush()
    }
  });
};

export { getController, getCacheController, postController, putController, deleteController };