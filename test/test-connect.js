var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('dress');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
  
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });
}

var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");

   findDocuments(db, function() {
          db.close();
        });
});