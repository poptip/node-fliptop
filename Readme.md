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
# Official Docs

Official docs are located at http://developer.fliptop.com/docs. Take the time to read them and understand what you will be getting with each response.
* * *

#License
(The MIT License)

Copyright (c) 2012 Benjamin Lyaunzon <lyaunzon.b@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
* * *	

Brought to you in part by: 

![dealwithit.jpg](http://i.imgur.com/xpvq3.jpg)