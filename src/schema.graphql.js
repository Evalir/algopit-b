const { gql } = require('apollo-server');

const schema = gql`
type Problem {
  title: String
  author: String
}

type Query {
  problems: [Problem]
}

`;

module.exports = schema;
