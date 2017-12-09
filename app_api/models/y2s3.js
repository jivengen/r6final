var mongoose = require('mongoose');

var y2s3DataSchema = new mongoose.Schema({
    team: String,
    player: String,
    kills: Number,
    deaths: Number,
    rounds: Number
});
console.log("Schema and crap");
mongoose.model('y2s3data', y2s3DataSchema, 'y2s3data');