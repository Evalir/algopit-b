const { MongoClient } = require('mongodb');

let context;

if (process.env.NODE_ENV === 'production') {
  context = () => MongoClient.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ds245927.mlab.com:45927/algopit`, { useNewUrlParser: true }).then(client => client.db('algopit'));
} else {
  context = () => MongoClient.connect(`mongodb://127.0.0.1:27017/`, { useNewUrlParser: true }).then(client => client.db('algopit'));
}

module.exports = context;
