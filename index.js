var express = require('express');
var app = express();
var port = PORT = process.env.PORT || 5000

app.use(express.static('wwwroot'));
var path = __dirname +'/Public/';

app.get('/', function(req, res){
    res.sendFile(path + 'DG_Map.html');
});

app.listen(port);
//console.log("Running on port 5000... " + "http://localhost:5000");