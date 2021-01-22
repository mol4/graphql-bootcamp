import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
    type Query {
        title: String!,
        price: Float!,
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }
`;
// Resolvers
const resolvers = {
  Query: {
    title() {
      return 'BestSeller';
    },
    price() {
      return 22.12;
    },
    releaseYear() {
      return 2020;
    },
    rating() {
      return 1.23;
    },
    inStock() {
      return true;
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log('The server is up!');
});
