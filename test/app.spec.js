var app = require('../app.js');
var requestsuper = require('supertest');
function request(){
  return requestsuper(app.listen());
}
describe('Praise app test', function () {
  it('get praise count', function (done) {
    request().get('/index/index')
      .expect(200)
      .end(function (err, res) {
        
        done(err);
      });
  });
  
  it('post praise', function (done) {
    request().post('/index/index')
      .expect(200)
      .end(function (err, res) {
        
        done(err);
      });
  });
});

