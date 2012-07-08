# node-fliptop



node-fliptop is a sleak and eloquent wrapper for the Fliptop API.

	npm install node-fliptop

## Usage

Make sure you have a developer account with [Fliptop](http://dev.qwerly.com/) and have activated your api key.

Try out the example:
	node example.js your-api-key

In general, you can make a query by simply providing the service and the handle:

	var top = require('node-fliptop')('your-api-key');

	top.flip('email','john@doe.com', function (err, data){
		if(err){
			console.log(err);
		}else{
		 	console.log(data);
		}
	});

	top.flip('twitter','rebeccablack', function (err, data){
		if(err){
			console.log(err);
		}else{
		 	console.log(data);
		}
	});

	top.flip('facebook','zuck', function (err, data){
		if(err){
			console.log(err);
		}else{
		 	console.log(data);
		}
	});
* * *	
Brought to you in part by: 
	![dealwithit.jpg](http://i.imgur.com/xpvq3.jpg)