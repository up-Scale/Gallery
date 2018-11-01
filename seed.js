console.log('seeding db');

let NUM_RECORDS = 100;

let db = require('./db/index.js');

let giveMeCats = require('./server/testJson.js').giveMeCats;

let test = require('./server/testJson.js');

// for(let i = 0; i < NUM_RECORDS; i++) {
//   db.createProductRecord(giveMeCats('test' + i) ,(err, result) => {
//     if(err) { 
//       console.log('ERROR there are likely duplicate entries'); 
//     } else {
//       console.log('creating product test' + i);
//     }
//   })
// }

db.createProductRecord(test.giveMeCats('cats') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product cats');
  }
})

db.createProductRecord(test.giveMeDogs('dogs') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product dogs');
  }
})

db.createProductRecord(test.giveMeFlashlight('flashlight') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product flashlight');
  }
})

db.createProductRecord(test.giveMeHeadphones('headphones') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product headphones');
  }
})

db.createProductRecord(test.giveMeSeki('seki-kit') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product seki-kit');
  }
})

db.createProductRecord(test.giveMeKeyboard('keyboard') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product keyboard');
  }
})

db.createProductRecord(test.giveMeWatches('watch') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product watch');
  }
})

setTimeout(process.exit, 1000)