const categoryServices = require('../services/categoryServices');
const authServices = require('../services/auth');

const createNewCategory = async (req, res) => {
  const { authorization } = req.headers;
  const isLogged = await authServices.checkJWT(authorization);
  if (isLogged) {
    const { status, createdCategory } = await categoryServices.createNewCategory(req.body);
    return res.status(status).json(createdCategory);
  }
};

module.exports = {
  createNewCategory,
};