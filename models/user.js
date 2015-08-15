var db = appRequire('utils/db'),
device = require('./device')(),
mongoose = require('mongoose');
// function hasher (val) { 
// 	return val = 
// }

var userSchema = mongoose.Schema({
	firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  username: { 
    	type: String,
    	unique: true,
    	required: true
  	},
  	password: { 
    	type: String, 
    	required: true
    	//validate: hasher
  	},
  	devices: [device.getSchema]
});

var user = module.exports = db.model('user', userSchema);