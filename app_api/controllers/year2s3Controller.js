var mongoose = require('mongoose');
var TeamData = mongoose.model('Y2s3Data');

var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
}
console.log("above controller");

module.exports.findTeam = function(req, res, next){
    
        var team = req.params.team;
        console.log("in controller");
        
        TeamData.find({"team": team},{_id:0}, function (err, teamdatas){
            if(err){
                console.log("Error in controller");
                console.log(err);
                sendJSONresponse(res, 404, err);
                //return console.error(err)
                
            }else{
                console.log("right spot of controller");
                sendJSONresponse(res,200,teamdatas);
            }
        });
};
                
