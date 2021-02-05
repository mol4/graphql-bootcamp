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

const db = {
  users,
  posts,
  comments,
};

export { db as default };
