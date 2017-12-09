var mongoose = require('mongoose');

var connectionstring = "mongodb://r6db:whitenoise@ds044577.mlab.com:44577/r6project";
mongoose.connect(connectionstring, { useMongoClient: true});
console.log("DB STUFF");

mongoose.Promise = global.Promise;

//Bring in your schmas ^ models
require('./y2s3Data');