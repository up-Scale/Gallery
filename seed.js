console.log('seeding db');

let NUM_RECORDS = 100;

let db = require('./db/index.js');

let giveMeCats = require('./server/testJson.js').giveMeCats;

for(let i = 0; i < NUM_RECORDS; i++) {
  db.createProductRecord(giveMeCats('test' + i) ,(err, result) => {
    if(err) { 
      console.log('ERROR there are likely duplicate entries'); 
    } else {
      console.log('creating product test' + i);
    }
  })
}

setTimeout(process.exit, 1000)