import 'newrelic';
import express from 'express';
import parser from 'body-parser';
import path from 'path';
import cors from 'cors';
import router from './routes.js';
import compression from 'compression';
import redis from 'redis';
import responseTime from 'response-time';

var bundleRoute = path.join(__dirname + '/../react-client/dist/');

const app = express();
app.use(cors());
app.use(compression());
app.use(express.static(bundleRoute));
app.use(parser.json());
app.use(responseTime());
app.use('/', router);

const client = redis.createClient();
client.on('connect', () => { console.log('Redis client connected') });
client.on('error', (err) => { console.log('Error: ' + err) });

app.listen(3000, () => { console.log('listening on 3000')});

export { client } ;
export default app;