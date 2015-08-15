var user = appRequire('/models/user');
bodyParser = require('body-parser');

app.get('/api/users/:username/devices', function(req, res){
	user.getDevices(req.params.username, function(err, devices){
		var jsonResponse = devices ? {devices: devices} : {error: "invalid username parameter"};
		res.json(jsonResponse);
	});
});

// app.post('/api/device', function(req,res){

// });e