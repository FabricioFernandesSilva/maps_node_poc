var express = require ('express');
var app =   express ();
var organizations = [''];
app.get('/', function(req, res){
  res.end();
});

app.listen(3000, function(){
    console.log("listening on port 3000")
});
