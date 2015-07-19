var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = 'mongodb://localhost:27017/test';

var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('dress');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        console.dir(docs);
        callback(docs);
    });
}

var connect = function(callback){
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
        console.log("Connected correctly to server");
        findDocuments(db, function(docs) {
            callback(docs);
            db.close();
        });
    });
}

module.exports = connect;