require('./api');

app.get('*', function(req, res, next) {
	res.json({error: 'not a valid request'});
});

