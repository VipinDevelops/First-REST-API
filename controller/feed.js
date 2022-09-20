//exporting a function

//getting post
exports.getPosts = (req, res, next) => {
  //sending response with JSON
  res.status(200).json({
    posts: [{ title: 'First Post', content: 'This is the first post!' }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  //create post in db

  res.status(201).json({
    message: 'Post created successfully!',
    post: {
      id: new Date().toISOString, //id created by mongodb
      title: title,
      content: content,
    },
  });
};
