let express = require('express');
let parser = require('body-parser')

let app = express();

let db = require('../db/index.js')

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(parser.json());

const BANNER_IMG = 'https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/t9QmCD4rQEmdqhiXUZPN_AI7B6379%20copy.jpg?auto=format&fm=jpg&fit=crop&w=800&h=242.42424242424244&bg=f0f0f0&q=38&dpr=2'

app.get('/productImages', (req, res) => {

  // parse product name or id from request, use to query db

  const dummyImages = { 
    bannerImageUrl: BANNER_IMG,
    images: [BANNER_IMG, BANNER_IMG, BANNER_IMG]
  }
  res.send(JSON.stringify(dummyImages))
})

app.post('/productImages', (req, res) => {
  try {
    db.createProductRecord(req.body, (err, record) => {
      if (err) res.status(500).send(err)
      else res.send(record)
    });
  } catch (err) {
    res.status(500).send(err)
  }
})

app.listen(3000, () => {
  console.log('listening')
})