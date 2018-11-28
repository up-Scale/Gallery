const express = require('express');
const path = require('path');
const { getController, postController, putController, deleteController } = require('./controller.js');

const router = express.Router();

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import GalleryContainer from '../react-client/src/index.jsx';
const fs = require('fs');

router.post('/productImages', postController);
router.get('/productImages/:productName', getController);
router.put('/productImages/:productName', putController);
router.delete('/productImages/:productName', deleteController);

router.get('/buy/:productName', (req, res) => {
  const app = ReactDOMServer.renderToString(<GalleryContainer />);
  const indexFile = path.resolve('./react-client/dist/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace(`<div id="gallery"></div>`, `<div id="gallery">${app}</div>`)
    );
  });
});

router.get('/*', (req, res) => {
  let staticpath = path.join(__dirname + '/../react-client/dist/')
  res.sendFile(staticpath)
});

module.exports = router;