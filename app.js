const express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var fs = require('fs');
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
    var filename = path.basename(req.url);
    var extension = path.extname(filename);
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (extension === '.png')
        console.log("The file " + filename + " was requested from "+ip+".");
    next();
});

//view engines are set here
app.set('view engine', 'pug')
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'))

app.get('/', function (req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip)
  res.render('index', { ip:ip });
});

server = http.createServer(app)
.listen(80,'0.0.0.0', function () {
  var host = server.address().address
  var port = server.address().port
  console.log("listening at http://%s:%s", host, port)
});
