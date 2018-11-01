let express = require('express');
let parser = require('body-parser')
let path = require('path')

let app = express();

let db = require('../db/index.js')

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(parser.json());

app.get('/buy/:productName', (req, res) => {
  res.sendFile(path.resolve('react-client/dist/index.html'))
})
 
app.get('/productImages/:productName', (req,res) => {
  let productName = req.url.split('/')[2]
  db.getProductRecord(productName, (err, data) => {
    if(err) {
      if (err.message === '404') res.status(404).send(err)
      else res.status(500).send(err)
    }
    else {
      res.send(data)
    }
  })
})

// use to generate test data. productName must be unique
// find test data in testJson.js
app.post('/productImages', (req, res) => {
  db.createProductRecord(req.body, (err, record) => {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    }
    else res.send(record)
  });
})

app.listen(3000, () => {
  console.log('listening on 3000')
})