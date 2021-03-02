const { MongoClient } = require('mongodb');

let connection;

const DB_NAME = 'Cookmaster';
const DB_URL = 'mongodb://localhost:27017';
// const MONGO_DB_URL = 'mongodb://localhost:27017/Cookmaster';

async function getCollection(collectionName) {
  connection = connection
    || (await MongoClient.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }));

  return connection.db(DB_NAME).collection(collectionName);
}

module.exports = getCollection;
