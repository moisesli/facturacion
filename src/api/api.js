var express = require('express')
var router = express.Router()


// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
});

router.get('/moises', function (req, res) {
    res.send('moises linares oscco')
});

module.exports = router