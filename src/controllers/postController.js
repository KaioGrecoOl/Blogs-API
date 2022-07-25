const { getAllPostsService } = require('../services/postService');

const getAllPostsController = async (req, res) => {
  const blogPost = await getAllPostsService();

  return res.status(200).json(blogPost);
};

module.exports = { getAllPostsController };
