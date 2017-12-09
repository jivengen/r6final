var express = require('express');
var router = express.Router();
var ctrly2s3Data = require('../controllers/year2s3Controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/y2s3/:team', ctrly2s3Data.findTeam);

module.exports = router;
