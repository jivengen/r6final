var mongoose = require('mongoose');

var connectionstring = process.env.MONGO_Y2S3_KEY;
mongoose.connect(connectionstring, { useMongoClient: true});
console.log("DB STUFF");

mongoose.Promise = global.Promise;

//Bring in your schmas ^ models
require('./y2s3Data');