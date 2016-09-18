var mongoose = require('mongoose');
var db = 'mongodb://localhost/site';
mongoose.connect(db)

mongoose.connection.on('connected', function(){
	console.log('mongodb connected to: ' + db)
})

mongoose.connection.on('error', function(err){
	console.log('mongodb connection error: ' + err)
})

mongoose.connection.on('disconnected', function(){
	console.log('mongodb disconnected')
})
// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('mongodb://localhost/site');

exports.mongoose = mongoose;