var request = require('request');

var base = 'http://api.fliptop.com/beta/person?';

var endpoint = {
	email : "email=",
	twitter: "twitter=http://twitter.com/",
	facebook: "facebook=http://facebook.com/"
};

module.exports = function(api_key){
	var client  = {key : api_key};

	function makeRequest(service, handle, callback){
		request.get({uri: base + endpoint[service] + handle + '&api_key' + client.key, json : true},
			function(err, resp, body){
				if(err)
					callback(err, body);
				else
					callback(null, body);
			});
	}

	client.flip = function (service, handle, callback){
		makeRequest(service, handle, callback);
	};

	return client;
}
