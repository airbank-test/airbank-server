import { gql } from "apollo-server";

const typeDefs = gql`
  type Transaction {
    id: ID!
    account: String!
    description: String!
    category: String
    reference: String
    currency: String
    amount: Float
    status: String
    transactionDate: String
    createdAt: String
    updatedAt: String
  }

  type MetaData {
    totalCount: Int
    hasMorePages: Boolean
  }

  type TrnsReturn {
    data: [Transaction]
    metaData: MetaData
  }

  type Query {
    transactions(
      page: Int
      pageSize: Int
      endMonth: String
      startMonth: String
    ): TrnsReturn
    transaction(id: Int!): Transaction
    transactionsBetweenMonths(
      startMonth: String!
      endMonth: String!
    ): [Transaction]
  }

  type Mutation {
    createTransaction(
      account: String!
      description: String!
      category: String
      reference: String
      currency: String
      amount: Float
      status: String
      transactionDate: String
      createdAt: String
      updatedAt: String
    ): Transaction
  }
`;

export default typeDefs;
