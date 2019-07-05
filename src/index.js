const { ApolloServer } = require('apollo-server');
require('dotenv').config();
require('./config');
const { Problem } = require('./schemas/ProblemSchema');

// GQL
const Query = require('./query');

const resolvers = {
  Query,
  // Mutation,
};

const typeDefs = require('./schema.graphql');
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    Problem,
  })
});

server.listen().then(({ url }) => {
  console.log(process.env);
  console.log(`🚀 Server ready at ${url}`);
});
