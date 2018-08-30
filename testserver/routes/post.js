var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/', function (req, res, next) {
    res.send({
        "id": String(95000 + Math.floor(Math.random()*3000)),
        "price": 750000,
        "amount": 9,
        "tradingPairName": "ETH-KRW",
        "side": "buy",
        "type": "limit",
        "createdAt": "2018-01-09T10:43:10.000Z",
    })
});

module.exports = router;