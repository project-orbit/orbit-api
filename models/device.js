var db = appRequire('config/db');

// function userin (deviceName) {
// 	return deviceName = 
// }

// UserSchema.path('deviceName').validate(function(deviceName)'Device cannot be blank');

var deviceSchema = new mongoose.Schema({
	macadr: {
		type: String,
		required: true
	},
	deviceName: { 
		type: String,
		default: 'Unnamed Device',
		//set: userin
	}
})

//compile schema to model
var Device = module.exports = db.model('device', deviceSchema)