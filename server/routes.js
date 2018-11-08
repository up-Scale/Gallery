const express = require('express');
const path = require('path');
const controller = require('./controller.js');

const router = express.Router();

router.get('/productImages/:productName', controller.getImages);
// router.post('/productImages', controller.postImages);
// router.put('/productImages/:productName', controller.putImages);
// router.delete('/productImages/:productName', controller.deleteImages);

// router.get('/buy/:productName', (req, res) => {
//   res.sendFile(path.resolve('react-client/dist/index.html'))
// });

// router.get('/test', (req, res) => {
//   res.sendFile(path.resolve('react-client/dist/index.html'))
// });

router.get('/*', (req, res) => {
  res.sendFile(path.resolve('react-client/dist/index.html'))
});

module.exports = router;