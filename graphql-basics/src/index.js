import { GraphQLServer } from 'graphql-yoga';

//Demo user Data
const users = [
  {
    id: '1',
    name: 'Ivan',
    email: 'ivan@example.com',
    age: 32,
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com',
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com',
    age: 37,
  },
];

//Demo posts Data

const posts = [
  {
    id: '1',
    title: 'Post 1q',
    body: 'Body of Post 1',
    published: false,
    author: '1',
  },
  {
    id: '2',
    title: 'Post 2p',
    body: 'Body of Post 2',
    published: true,
    author: '2',
  },
  {
    id: '3',
    title: 'Post 3',
    body: 'Body of Post 3q',
    published: false,
    author: '3',
  },
  {
    id: '10',
    title: 'Post 10 GraphQL',
    body: 'Body of Post 10 ...',
    published: false,
    author: '1',
  },
  {
    id: '11',
    title: 'Post 11 GraphQL 11..',
    body: 'Body of Post 11',
    published: true,
    author: '2',
  },
  {
    id: '12',
    title: 'Post 12',
    body: 'Body of Post 12',
    published: false,
    author: '3',
  },
];
// Type definitions (schema)
const typeDefs = `
    type Query {
      users(query: String): [User!]!
      posts(query: String): [Post!]!
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
      author: User!
    }
`;

// Resolvers
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }

      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }

      return posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(args.query.toLowerCase()) ||
          post.body.toLowerCase().includes(args.query.toLowerCase())
        );
      });
    },
    me(parent, args, ctx, info) {
      return {
        id: '12345',
        name: 'Mike',
        email: 'mike@example.com',
        age: 28,
      };
    },
    lastPost(parent, args, ctx, info) {
      return {
        id: '123asd2dsqwfdsq2',
        title: 'SuperPost',
        body: `<h1> Hello Word! </h1>`,
        published: false,
      };
    },
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
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
