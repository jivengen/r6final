var express = require('express');
var router = express.Router();
var ctrly2s3Data = require('../controllers/year2s3Controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/y2s3Data/:team', ctrly2s3Data.Y2s3FindOneTeam);
router.get('/y2s3Data', ctrly2s3Data.Y2s3FindAllTeams);

module.exports = router;
