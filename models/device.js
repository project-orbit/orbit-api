var db = appRequire('utils/db'),
mongoose = require('mongoose');

// function userin (deviceName) {
// 	return deviceName = 
// }

// UserSchema.path('deviceName').validate(function(deviceName)'Device cannot be blank');

var deviceSchema = mongoose.Schema({
	_id: { 
      type: String,
      unique: true,
      required: true
    },

	deviceName: { 
		type: String,
		required: true 
	},

	user: {type: String, ref: 'User'},

	alias: String
});

deviceSchema.virtual('macAddress').get(function(){
	return this._id;
});

module.exports.schema = deviceSchema;

//compile schema to model
module.exports.model = db.model('Device', deviceSchema);

