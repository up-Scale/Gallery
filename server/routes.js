import express from 'express';
import path from 'path';
import { getController, postController, putController, deleteController } from './controller.js';
import fs from 'fs';

const router = express.Router();

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import GalleryContainer from '../react-client/src/index.jsx';

router.post('/productImages', postController);
router.get('/productImages/:productName', getController);
router.put('/productImages/:productName', putController);
router.delete('/productImages/:productName', deleteController);

router.get('/buy/:productName', (req, res) => {
  const hydrate = ReactDOMServer.renderToString(React.createElement(GalleryContainer));
  const indexFile = path.resolve('./react-client/dist/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace(`<div id="gallery"></div>`, `<div id="gallery">${hydrate}</div>`)
    );
  });
});

router.get('/*', (req, res) => {
  let staticpath = path.join(__dirname + '/../react-client/dist/')
  res.sendFile(staticpath)
});

export default router;