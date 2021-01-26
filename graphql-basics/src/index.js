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
];

//Demo comments data
const comments = [
  {
    id: '111',
    text: 'Qwerty1',
    author: '1',
    post: '1',
  },
  {
    id: '112',
    text: 'Qwerty2',
    author: '2',
    post: '2',
  },
  {
    id: '113',
    text: 'Qwerty3',
    author: '3',
    post: '3',
  },
  {
    id: '117',
    text: 'Qwerty7',
    author: '1',
    post: '1',
  },
  {
    id: '118',
    text: 'Qwerty8',
    author: '2',
    post: '2',
  },
  {
    id: '119',
    text: 'Qwerty9',
    author: '3',
    post: '3',
  },
  {
    id: '123',
    text: 'Qwerty23',
    author: '1',
    post: '1',
  },
];

// Type definitions (schema)
const typeDefs = `
    type Query {
      users(query: String): [User!]!
      posts(query: String): [Post!]!
      comments: [Comment!]!
      me: User!
      lastPost: Post
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
      posts: [Post!]!
      comments: [Comment!]!
    }

    type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
      author: User!
      comments: [Comment!]!
    }

    type Comment {
      id: ID!
      text: String!
      author: User!
      post: Post!
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
    comments(parent, args, ctx, info) {
      return comments;
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
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.post === parent.id;
      });
    },
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => {
        return post.author === parent.id;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.author === parent.id;
      });
    },
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    post(parent, args, ctx, info) {
      return posts.find((post) => {
        return post.id === parent.post;
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
