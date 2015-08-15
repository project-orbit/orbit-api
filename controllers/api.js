var userSingleton = appRequire('/models/user'),
deviceSingleton = appRequire('/models/device');

app.get('/api/user/', function(req,res){
	res.json("user");
});