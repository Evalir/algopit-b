const { MongoClient } = require('mongodb');

const context = () => MongoClient.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ds245927.mlab.com:45927/algopit`, { useNewUrlParser: true }).then(client => client.db('algopit'));

module.exports = context;
