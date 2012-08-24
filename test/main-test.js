var API_KEY = 'whatever';
var fliptop = require('..')(API_KEY);
var assert  = require('assert');
var nock    = require('nock');

var HOST = 'http://api.fliptop.com';
var services = {
  email: {
    path: '/beta/person?email=jon@doe.com&api_key=' + API_KEY,
    handle: 'jon@doe.com',
    data: {}
  },

  twitter: {
    path: '/beta/person?twitter=http://twitter.com/rebeccablack&api_key=' + API_KEY,
    handle: 'rebeccablack',
    data: {}
  },

  facebook: {
    path: '/beta/person?facebook=http://facebook.com/thezuck&api_key=' + API_KEY,
    handle: 'thezuck',
    data: {}
  }
};

for (var key in services) {
  if (services.hasOwnProperty(key)) {
    testService(services[key], key);
  }
}

function testService(service, key) {
  describe('fetch by ' + key, function() {
    it('returns correct data about the user', function(done) {
      nock(HOST)
        .get(service.path)
        .reply(200, service.data)
        ;

      fliptop[key](service.handle, function(err, data) {
        if (err) return done(err);

        assert.deepEqual(data, service.data);
        done();
      });
    });
  });
}
