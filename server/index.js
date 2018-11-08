const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./routes.js')

const db = require('../db/index.js')
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname + '/../react-client/dist')));
app.use(parser.json());


app.use('/', router);

app.get('/buy/:productName', (req, res) => {
  res.sendFile(path.resolve('react-client/dist/index.html'))
});

// app.get('/buy/:productName', (req, res) => {
//   res.sendFile(path.resolve('react-client/dist/index.html'))
// })

// app.get('/productImages/:productName', (req,res) => {
//   let productName = req.url.split('/')[2]
//   db.getProductRecord(productName, (err, data) => {
//     if(err) {
//       if (err.message === '404') res.status(404).send(err)
//       else res.status(500).send(err)
//     }
//     else {
//       res.send(data)
//     }
//   })
// })

// // use to generate test data. productName must be unique
// // find test data in testJson.js
// app.post('/productImages', (req, res) => {
//   db.createProductRecord(req.body, (err, record) => {
//     if (err) {
//       console.error(err)
//       res.status(500).send(err)
//     }
//     else res.send(record)
//   });
// })

app.listen(3000, () => {
  console.log('listening on 3000')
})