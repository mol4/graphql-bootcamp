import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
    type Query {
      add(numbers: [Float!]!): Float!
      greeting(name: String, position: String): String!
      grades: [Int!]!
      me: User!
      lastPost: Post
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
    }

    type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
    }
`;

// Resolvers
const resolvers = {
  Query: {
    add(parent, args, ctx, info) {
      if (args.numbers.length === 0) {
        return 0;
      }
      return args.numbers.reduce((accumalator, current) => {
        return accumalator + current;
      });
    },
    greeting(parent, args, ctx, info) {
      if (args.name && args.position) {
        return `Hello, ${args.name} You are my favorite ${args.position}`;
      } else {
        return 'Hello';
      }
    },
    grades(parent, args, ctx, info) {
      return [99, 80, 10, 95];
    },
    me() {
      return {
        id: '12345',
        name: 'Mike',
        email: 'mike@example.com',
        age: 28,
      };
    },
    lastPost() {
      return {
        id: '123asd2dsqwfdsq2',
        title: 'SuperPost',
        body: `<h1> Hello Word! </h1>`,
        published: false,
      };
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
