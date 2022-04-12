const categoryServices = require('../services/categoryServices');
const authServices = require('../services/auth');

const createNewCategory = async (req, res) => {
  const { authorization } = req.headers;
  const isLogged = await authServices.checkJWT(authorization);
  if (isLogged) {
    const createdCategory = await categoryServices.createNewCategory(req.body);
    return res.status(201).json(createdCategory);
  }
};

const getAll = async (req, res) => {
  const { authorization } = req.headers;
  console.log('\nauthorization: ', authorization);
  const isLogged = await authServices.checkJWT(authorization);
  if (isLogged) {
    const categoriesData = await categoryServices.getAll();
    res.status(200).json(categoriesData);
  }
};

module.exports = {
  createNewCategory,
  getAll,
};