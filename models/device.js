var mongoose = require("mongoose");

var db = mongoose.connect('mongodb://');

function userin (deviceName) {
	return deviceName = 
}

// UserSchema.path('deviceName').validate(function(deviceName)'Device cannot be blank');

var deviceSchema = new mongoose.Schema({
	macadr: {
		type: String,
		required: true
	},
	deviceName: { 
		type: String,
		default: 'Unnamed Device',
		set: userin
	}
})

//compile schema to model

var Device = db.model('device', deviceSchema)
console.log("Created model");