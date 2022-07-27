const { getAllPostsService,
  getPostByIdService,
   } = require('../services/postService');

const getAllPostsController = async (req, res) => {
  const blogPost = await getAllPostsService();

  return res.status(200).json(blogPost);
};

const getPostByIdController = async (req, res) => {
  const { id } = req.params;
    
    const post = await getPostByIdService(id);

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
};

module.exports = { getAllPostsController, getPostByIdController };
