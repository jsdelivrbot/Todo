var express = require('express')
var port = process.env.PORT || 3000;
var path = require('path')

var app = express()

app.set('views', path.join(process.env.PWD, 'build'));

app.use(express.static(path.join(process.env.PWD, 'build')));

app.listen(port, function(){
  console.log('App is listening on port: ' + port)
})
