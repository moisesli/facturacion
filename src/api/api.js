var express = require('express')
var router = express.Router()
const path = require('path')
const jwt = require('jsonwebtoken');

// Archivo estatico
// app.use('/static', express.static(__dirname + '/assets'));

// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
});

router.get('/web', function (req, res) {
  res.sendFile(path.join(__dirname + '/web/index.html'));
  // res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/login', (req, res) => {
  // auth user
  const user = {id: 3};
  const token = jwt.sign({ user }, 'moises');
  res.json({token});
});

router.get('/verifica', (req,res) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozfSwiaWF0IjoxNTU5MDcxNDI1fQ.k8KbGLYCFfHB9dUUse_sUTiGvK-B3muDHjBkzZI72bk';
  jwt.verify(token, 'moises', function(err, user) {
    if (err) {
      res.status(401).send({
        error: 'Token inválido'
      })
    } else {
      res.send({
        message: 'Awwwww yeah!!!!'
      })
    }
  });
});



module.exports = router