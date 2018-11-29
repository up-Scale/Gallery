import 'newrelic';
import express from 'express';
import parser from 'body-parser';
import path from 'path';
import cors from 'cors';
import router from './routes.js';
import compression from 'compression';
// const cluster = require('cluster');
// const http = require('http');
// const redis = require('redis');

var bundleRoute = path.join(__dirname + '/../react-client/dist/');

const app = express();
app.use(cors());
app.use(compression());
app.use(express.static(bundleRoute));
app.use(parser.json());
app.use('/', router);

// const client = redis.createClient();
// client.on('connect', () => { console.log('Redis client connected') });
// client.on('error', (err) => { console.log('Error: ' + err) });

app.listen(3000, () => { console.log('listening on 3000')});

export default app;