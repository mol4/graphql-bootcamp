const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(args.query.toLowerCase()) ||
        post.body.toLowerCase().includes(args.query.toLowerCase())
      );
    });
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  },
  me(parent, args, ctx, info) {
    return {
      id: v4(),
      name: 'Mike',
      email: 'mike@example.com',
      age: 28,
    };
  },
  lastPost(parent, args, ctx, info) {
    return {
      id: v4(),
      title: 'SuperPost',
      body: `<h1> Hello Word! </h1>`,
      published: false,
    };
  },
};

export { Query as default };
