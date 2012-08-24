// example usage of node-fliptop - queries a test
// handle by email, twitter, and facebook, providing
// you pass your Fliptop API key as an arguement.
// Example: node example.js 2-10d12-dj210ldkj

var fliptop = require('./lib/fliptop.js')(process.argv[2]);

fliptop.email('jon@gmail.com', function(err, data){
  if (err) console.log(err);

	console.log('Query Type: Email\n', JSON.stringify(data,true,2));
	console.log('.....................\n');
});

fliptop.twitter('rebeccablack', function(err, data){
  if (err) throw err;

	console.log('Query Type: Twitter\n', JSON.stringify(data,true,2));
	console.log('.....................\n');
});

fliptop.facebook('zuck', function(err, data){
  if (err) console.log(err);

	console.log('Query Type: Facebook\n', JSON.stringify(data,true,2));
	console.log('.....................\n');
});
