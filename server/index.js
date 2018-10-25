let express = require('express');
let parser = require('body-parser')
let path = require('path')

let app = express();

let db = require('../db/index.js')

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(parser.json());

const BANNER_IMG = 'https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/t9QmCD4rQEmdqhiXUZPN_AI7B6379%20copy.jpg?auto=format&fm=jpg&fit=crop&w=800&h=242.42424242424244&bg=f0f0f0&q=38&dpr=2'
const CAROUSEL_IMG_URL = 'https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/UbUHmV3QPiZTK3nHpAHJ_361A2108.jpg?auto=format&fm=jpg&fit=crop&w=473&bg=f0f0f0&dpr=2'

app.get('/:productName', (req, res) => {
  res.sendFile(path.resolve('react-client/dist/index.html'))
})

app.get('/productImages', (req, res) => {
  const dummyImages = { 
    bannerImageUrl: BANNER_IMG,
    images: [CAROUSEL_IMG_URL, BANNER_IMG, BANNER_IMG]
  }
  res.send(JSON.stringify(dummyImages))
})

app.get('/productImages/:productName', (req,res) => {
  try {
    let productName = req.url.split('/')[2]
    db.getProductRecord(productName, (err, data) => {
      if(err) res.status(500).send(err)
      else res.send(data)
    })
  } catch(err) {
    res.status(500).send(err);
  }
})

// use to generate test data. productName must be unique
// find test data in testJson.js
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
  console.log('listening on 3000')
})