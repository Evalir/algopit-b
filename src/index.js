const { ApolloServer } = require('apollo-server');
require('dotenv').config();
// GQL
const Query = require('./query');
// const Mutation = require('./mutation');
// Mongo
const db = require('./db');

const resolvers = {
  Query,
  // Mutation,
};

const typeDefs = require('./schema.graphql');
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    getDB: db,
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
