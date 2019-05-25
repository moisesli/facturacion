var express = require('express')
var router = express.Router()
const path = require('path')

// Archivo estatico
// app.use('/static', express.static(__dirname + '/assets'));

// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
});

router.get('/moises', function (req, res) {
    res.sendFile(path.join(__dirname + '/web/index.html'));
    // res.sendFile(path.join(__dirname+'/index.html'));
});

module.exports = router