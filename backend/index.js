// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
})); 
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
//var url = "mongodb://profilesdb:xmk0KQeSS3oaos1Bf2pvt0B03E3Nml8udAuGr9DVQMhp8LcSiTbVdaxYUEoGl0p0EoYdDTEVDRQeO7po0bmwDg==@profilesdb.documents.azure.com:10255/portfolio?ssl=true&replicaSet=globaldb";
var url = "mongodb://localhost:27017/portfolio";

if(process.env.PORT){
    url = "mongodb://profilesdb:xmk0KQeSS3oaos1Bf2pvt0B03E3Nml8udAuGr9DVQMhp8LcSiTbVdaxYUEoGl0p0EoYdDTEVDRQeO7po0bmwDg==@profilesdb.documents.azure.com:10255/portfolio?ssl=true&replicaSet=globaldb";
}

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;


// Use Api routes in the App
app.use('/api', apiRoutes);

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});