'user strict';
var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
  host     : '52.13.229.176',
  user     : 'root',
  password : 'moiseslinar3s',
  database : 'cliente'
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
