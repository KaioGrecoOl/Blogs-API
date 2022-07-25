const { User, BlogPost, Category } = require('../database/models/index');

const getAllPostsService = async () => {
  const blogPosts = await BlogPost.findAll({
      include: [
        { model: User,
          as: 'user', 
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
  });
  return blogPosts;
};

module.exports = { getAllPostsService };
