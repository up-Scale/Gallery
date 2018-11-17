const request = require('supertest');
const { app } = require('../server/index.js')

describe('GET /productImages/:productName', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/productImages/Pizza28965porro56054')
      .expect('Content-Type', /json/)
      .expect(200);
      done();
  });
});

