var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.query);
    res.render('index', {title: 'Express'});
});

router.post('/', function (req, res, next) {
    var url = req.body.params.url
    var data = req.body.params
    var method = req.body.params.method
    var start = new Date().getTime()
    if (method === 'POST') {
        axios.post(url, {params: data,time:true}).then((response) => {
            var responseTime = new Date().getTime() - start;
            var json = {status: response.status, data: response.data, time: responseTime, size: response.headers['content-length']};
            console.log(json);
            res.send(json);
        })
    } else if (method === 'GET') {
        axios.get(url, {params: data}).then((response) => {
            res.send(response);
        })
    }
});

module.exports = router;
