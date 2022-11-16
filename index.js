var MongoClient = require('mongodb').MongoClient;
var app = require('./app');
var port = 3800;


const uri = process.env.USER + process.env.PASSWORD + process.env.CLUSTER;

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("climate");
  var query = {province: /San/};
  dbo.collection("smn").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    app.listen(port, () => {
      console.log("Server Running")
    });
    // before close
    db.close();
  });
});




/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://acozzi:process.env.PASSWORD@clusterale.3clkqzg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(
  uri, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 
  });
client.connect(
  err => {
    const collection =          
      client.db("climate").collection("smn");
      console.log("Conexion realizada");
      console.log(client.db.smn.find({name: "Dolores"}))
    
  // perform actions on the collection object
  client.close();
});*/
