var express = require('express');

var router = express.Router();

var friends = require('../data/friends');

router.get('/friends', function(req, res) {

    res.send(friends);
});

router.post('/friends', function(req, res) {
    var data = req.body;
    console.log(data);
    
    friends.push(data)
    res.send(friends);
});

module.exports = router;