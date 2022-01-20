const { gql } = require("apollo-server");

const typeDefs = gql`
  type Transaction {
    id: ID!
    account: String!
    description: String!
    category: String
    reference: String
    currency: String
    amount: String
    status: String
    transactionDate: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    transactions: [Transaction]
    transaction(id: Int!): Transaction
  }

  type Mutation {
    createTransaction(
      account: String!
      description: String!
      category: String
      reference: String
      currency: String
      amount: String
      status: String
      transactionDate: String
      createdAt: String
      updatedAt: String
    ): Transaction
  }
`;

export default typeDefs;
