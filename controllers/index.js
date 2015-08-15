require('./api');

app.get('*', function(req, res, next) {
	res.json('not a valid request');
});

