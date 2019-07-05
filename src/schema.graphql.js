const { gql } = require('apollo-server');

const schema = gql`

type Problem {
  _id: ID!
  name: String!
  difficulty: Int
  computedDifficulty: Float
  url: String
  contest: String
  entryDate: String
  sourceReferenceId: String
  lastUpdated: String
  categories: [String]
  judge: String
  writer: String
  tags: [String]
}

type Query {
  problems: [Problem]
}

`;

module.exports = schema;
