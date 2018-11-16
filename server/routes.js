const express = require('express');
const path = require('path');
const { getController, postController, putController, deleteController } = require('./controller.js');

const router = express.Router();

router.post('/productImages', postController);
router.get('/productImages/:productName', getController);
router.put('/productImages/:productName', putController);
router.delete('/productImages/:productName', deleteController);

router.get('/*', (req, res) => {
  res.sendFile(path.resolve('react-client/dist/index.html'))
});

module.exports = router;