var db = appRequire('utils/db'),
mongoose = require('mongoose');

// function userin (deviceName) {
// 	return deviceName = 
// }

// UserSchema.path('deviceName').validate(function(deviceName)'Device cannot be blank');

var deviceSchema = mongoose.Schema({
	macAdress: {
		type: String,
		required: true
	},
	deviceName: { 
		type: String,
		default: 'Unnamed Device'
		//set: userin
	}
})

//compile schema to model
var device = db.model('device', deviceSchema);

module.exports.schema = deviceSchema;

module.exports = function(){
	
	function getModel(){
		return device;
	}

	function getSchema(){
		return deviceSchema;
	}

	return {getModel :getModel, getSchema: getSchema};
}