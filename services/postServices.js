const { BlogPost, User, Category } = require('../models');
const ERR = require('./errorMessages');

const checkIfCategoryIdsExistOnDB = async (idsList) => {
  const categories = await Category.findAll();
  const idListFromDB = categories.map((cat) => cat.dataValues.id);
  idsList.forEach((id) => {
    const includes = idListFromDB.includes(id);
    if (!includes) throw ERR.CATEGORY_IDS_NOT_FOUND;
    });
};

const createNewPost = async (data) => {
  if (!data.title) throw ERR.TITLE_IS_REQUIRED;
  if (!data.content) throw ERR.CONTENT_IS_REQUIRED;
  if (!data.categoryIds) throw ERR.CATEGORY_IDS_IS_REQUIRED;
  await checkIfCategoryIdsExistOnDB(data.categoryIds);
  const { title, content } = data;
  const createdPost = await BlogPost.create({
    title, content, userId: 1, published: Date.now(), updated: Date.now() });
  return createdPost;
};

const getAll = async () => {
  const postsData = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  }); 
  return postsData;
};

const getById = async (id) => {
  const postData = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  }); 
  if (postData) return postData;
  throw ERR.POST_DOES_NOT_EXIST;
};

/// verify if userId is equal in the BlogPosts
const checkIfUserOwnsThePost = async (userId, postId) => {
  const post = await getById(postId);
  const postInfo = {
    id: Object.values(post)[0].id,
    userId: Object.values(post)[0].userId,
  };
  if (userId !== postInfo.userId) throw ERR.UNAUTHORIZED_USER;
  return true;
};

const updatePost = async (id, title, content, categoryIds) => {
  if (categoryIds) throw ERR.CATEGORIES_CANNOT_BE_EDITED;
  if (!title) throw ERR.TITLE_IS_REQUIRED;
  if (!content) throw ERR.CONTENT_IS_REQUIRED;

  await BlogPost.update(
    { title, content, updated: Date.now() },
    { where: { id } },
  );

  const postData = await BlogPost.findOne({
      where: { id },
      include: [{
                  model: Category,
                  as: 'categories', 
                  through: { attributes: { exclude: ['postId', 'categoryId'] } },
                }],
      attributes: { exclude: ['updated', 'published'] },
    });

    return postData;
};

module.exports = {
  createNewPost,
  getAll,
  getById,
  updatePost,
  checkIfUserOwnsThePost,
};
