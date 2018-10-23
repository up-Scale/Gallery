let express = require('express');

let app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(3000, () => {
  console.log('listening')
})