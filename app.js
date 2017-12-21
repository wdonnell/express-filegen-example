const express = require('express')
const app = express()
var path = require('path');
var bodyParser = require("body-parser");
var fs = require('fs');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended : true}));


//serve index page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//handle form submission
app.post('/doSubmit', function(req,res){
  var data = req.body.myData;
  writeDataToFile('output.txt', data + '\n');
  res.end("successful");
});

//append string to file
function writeDataToFile(fileName, data) {
  fs.appendFile(fileName, data, function (err) {
    if (err) throw err;
    console.log('wrote to file');
  });
};

app.listen(3000, () => console.log('Example app listening on port 3000!'))