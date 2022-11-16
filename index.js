var MongoClient = require('mongodb').MongoClient;
var app = require('./app');
var port = 3800;


const uri = process.env.USER + process.env.PASSWORD + process.env.CLUSTER;

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("climate");
  var query = {name: "Venado Tuerto"};
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