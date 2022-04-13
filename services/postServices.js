const { BlogPost, User, Category } = require('../models');
const ERR = require('./errorMessages');

const checkIfCategoryIdsExistOnDB = async (idsList) => {
  const categories = await Category.findAll();
  const idListFromDB = categories.map((cat) => cat.dataValues.id);
  idsList.forEach((element) => {
    const includes = idListFromDB.includes(element);
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
  console.log('its passing here');
  const categoriesData = await BlogPost.findAll({
    include: [
      { model: User, as: 'User' },
      // { model: Category, as: 'Categories', through: { attributes: [] } },
      { model: Category },
    ],
  }); 
  return categoriesData;
};

// const getAll = async () => {
//   const categoriesData = await BlogPost.findAll();
//   return categoriesData;
// };

module.exports = {
  createNewPost,
  getAll,
};