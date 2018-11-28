import { username, password } from '../config.js'

/* MongoDB/Mongoose */
// const mongoose = require('mongoose');
// mongoose.connect(process.env.DB_PROVIDER || 'mongodb://127.0.0.1:27017/upScale')

// let db = mongoose.connection;

// db.on('error', () => console.log('mongoose connection error'));
// db.once('open', () => console.log('mongoose connection successful'))




/* PostgreSQL/Sequelize */
// const Sequelize = require('sequelize');
// var db = new Sequelize('postgres', 'Stacy', '', {
//   host: 'localhost',
//   dialect: 'postgres',

//   pool: {
//     max: 10,
//     min: 1,
//     idle: 10000
//   }
// });



/* AWS EC2 */
const Sequelize = require('sequelize');
let uri = `postgresql://${username}:${password}@ec2-18-223-111-206.us-east-2.compute.amazonaws.com:5432/postgres`
var db = new Sequelize(uri, {});


module.exports = db;