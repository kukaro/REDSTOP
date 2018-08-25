var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var value = ['Test Block','Scenario','Report','Monitoring','Scheduler'];
    res.send(value);
});

module.exports = router;
