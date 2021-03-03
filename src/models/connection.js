const { MongoClient } = require('mongodb');

// conexão local
const MONGO_DB_URL = 'mongodb://localhost:27017/Cookmaster';
// conexão para o evaluator github
// const MONGO_DB_URL = 'mongodb://mongodb:27017/Cookmaster';

const DB_NAME = 'Cookmaster';

const connection = () => MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db(DB_NAME))
  .catch((err) => {
    console.log(err);
    process.exit();
  });

module.exports = connection;