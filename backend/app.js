// var express = require('express');
// var MongoClient = require('mongodb').MongoClient;

// var app = express();
// var fs = require("fs");

// const portnumber = process.env.PORT || 1336;
// var server = app.listen(portnumber, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })




// app.get('/listUsers', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       console.log( data );
      
//       res.end( data );
//    });
// })



// var url = "mongodb://localhost:27017/portfolio";

// MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
//   if (err) throw err

//   var db = client.db('portfolio')

//   db.collection('Employee').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
//   })
// })