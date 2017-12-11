var mongoose = require('mongoose');
var y2s3TeamData = mongoose.model('Y2s3Data');

var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
}
console.log("above controller");

module.exports.Y2s3FindAllTeams = function(req,res){
    console.log("Finding all players Records", req);
    
    y2s3TeamData
                .find({})
                .exec(function(err, y2s3teamdata) {
                    if(err){
                        console.log(err);
                        sendJSONresponse(res,404,err);
                    }
                    console.log(y2s3teamdata);
                    sendJSONresponse(res,200,y2s3teamdata);
                })
}

module.exports.Y2s3FindOneTeam = function(req, res, next){
    
        var team = req.params.team;
        console.log("in controller");
        
        y2s3TeamData.find({"team": team},{_id:0}, function (err, teamdatas){
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
                
