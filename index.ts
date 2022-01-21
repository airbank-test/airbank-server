import { ApolloServer } from "apollo-server";
import Mutation from "./resolvers/mutation";
import Query from "./resolvers/query";
import typeDefs from "./db/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
