var mongoose = require('mongoose');

var Y2s3DataSchema = new mongoose.Schema({
    team: String,
    player: String,
    kills: Number,
    deaths: Number,
    rounds: Number
});
console.log("Schema and crap");
mongoose.model('Y2s3Data', Y2s3DataSchema, 'Y2s3Data');