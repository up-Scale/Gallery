const request = require('supertest');
const express = require('express');

const app = express();

describe('GET /productImages/:productName', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/productImages/Pizza28965porro56054')
      .set('Accept', 'application/json')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});