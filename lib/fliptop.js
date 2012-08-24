var request = require('request');
var errors = require('./errors');

var base = 'http://api.fliptop.com/beta/person?';

var endpoint = {
	email : "email=",
	twitter: "twitter=http://twitter.com/",
	facebook: "facebook=http://facebook.com/"
};

module.exports = function(api_key){
	var client  = {key : api_key};

  ['email', 'twitter', 'facebook'].forEach(function(service) {
    client[service] = function(handle, callback) {
      var uri = base + endpoint[service] + handle + '&api_key=' + client.key;
      request.get({uri: uri, json : true}, function(err, resp, body){
        if (err) return callback(err);

        if (resp.statusCode !== 200) {
          var error = errors[resp.statusCode];
          if (error) {
            err = new Error(error.message);
            err.code = resp.statusCode;
            err.type = error.type;
          } else {
            err = new Error('Unknown error: ' + resp.statusCode);
          }
          return callback(err);
        }

        if (typeof body === 'string') {
          return callback(new Error(body));
        }

        callback(null, body);
      });
    };
  });

	return client;
};
