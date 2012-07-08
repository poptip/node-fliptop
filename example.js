// example usage of node-fliptop - queries a test 
// handle by email, twitter, and facebook, providing
// you pass your Fliptop API key as an arguement.
// Example: node example.js 2-10d12-dj210ldkj

var top = require('./lib/fliptop.js')(process.argv[2]);

top.flip('email','robbie@fliptop.com', function(err, data){
	console.log('Query Type: Email\n', JSON.stringify(data,true,4));
	console.log('.....................\n');
});

top.flip('twitter', 'fliptop', function(err, data){
	console.log('Query Type: Twitter\n', JSON.stringify(data,true,4));
	console.log('.....................\n');
});

top.flip('facebook', 'camplejohn', function(err, data){
	console.log('Query Type: Facebook\n', JSON.stringify(data,true,4));
	console.log('.....................\n');
});