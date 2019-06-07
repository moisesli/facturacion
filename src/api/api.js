var express = require('express');
var mysql = require('./config/db');
const path = require('path')
const jwt = require('jsonwebtoken');

var router = express.Router()


router.get('/sql', function (req, res) {
  mysql.query('SELECT * from  emisores', function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});

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

router.post('/verifica', (req,res) => {
  const token = req.headers['authorization'];
  // const token = req.body.token;
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozfSwiaWF0IjoxNTU5MTA0MDM3fQ.XVWE7OCIpm__SW4tJem1hkX3F14gq5bL3jUGqyW6UbQ';
  jwt.verify(token, 'moises', function(err, user) {
    if (err) {
      res.send({
        token: ''
      });
      // res.status(401).send({
      //   error: 'Token inválido'
      // })
    } else {
      res.send({
        token: token
      })
    }
  });
});



module.exports = router