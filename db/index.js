
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_PROVIDER || 'mongodb://127.0.0.1:27017/deltaDrop')

let db = mongoose.connection;

db.on('error', () => console.log('mongoose connection error'))
db.once('open', () => console.log('mongoose connection successful'))

module.exports = db;