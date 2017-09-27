import mongodb from 'mongodb';

const DB_CONN = "mongodb://localhost:27017/jiaolandb";

MongoClient = mongodb.MongoClient;

export default Connect = (callback) => {
    MongoClient.connect(DB_CONN, (err, db) => {
        if (err) console.log(err);
        else callback(db);
    })
};
