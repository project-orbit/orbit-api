var mongoose = require("mongoose");

var db = mongoose.connect('mongodb://');

function hasher (val) { 
	return val = 
}

var userSchema = new mongoose.Schema({
	userName: { 
    	type: String,
    	unique: true,
    	required: true,
  	},
  	password: { 
    	type: String, 
    	required: true,
    	validate: hasher
  	},
  	devices: [deviceSchema]
});

var User = db.model('user', userSchema)
console.log("Created model");