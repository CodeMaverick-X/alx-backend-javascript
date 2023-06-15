const request = require('request');
const expect = require('chai').expect;

describe('Index Page', () => {
  it('gets the index page without /', (done) => {
    request.get(`http://localhost:7865`, (err, data) => {
      if (err) {
        return done(err);
      }
      expect(data.statusCode).to.equal(200);
      expect(data.body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('gets the index page with /', (done) => {
    request.get(`http://localhost:7865`, (err, data) => {
      if (err) {
        return done(err);
      }
      expect(data.statusCode).to.equal(200);
      expect(data.body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('lol get the index page with qith query string', (done) => {
    request.get(`http://localhost:7865?state=0`, (err, data) => {
      if (err) {
        return done(err);
      }
      expect(data.statusCode).to.equal(200);
      done();
    });
  });
});
