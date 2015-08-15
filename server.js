var app = require('./utils/app');

//configurations of nessecary modules
var http = require('http');

http
.createServer(app)
.listen((process.env.PORT || 5000), function(){
	console.log('Node server is listening on port %d', this.address().port);
});