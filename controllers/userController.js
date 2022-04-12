const userServices = require('../services/userServices');
const authServices = require('../services/auth');

const getAllUsers = async (req, res) => {
  const { authorization } = req.headers;
  console.log('\nauthorization: ', authorization);
  const isLogged = await authServices.checkJWT(authorization);
  if (isLogged) {
    const { status, userData } = await userServices.getAllUsers();
    res.status(status).json(userData);
  }
};

const getById = async (req, res) => {
  const { authorization } = req.headers;
  console.log('\nauthorization: ', authorization);
  const isLogged = await authServices.checkJWT(authorization);
  if (isLogged) {
    const { id } = req.params;
    console.log('id: ', id);
    const { status, foundUser } = await userServices.getById(id);
    res.status(status).json(foundUser);
  }
};

const createNewUser = async (req, res) => {
  const { status, createdUser } = await userServices.createNewUser(req.body);
  return res.status(status).json(createdUser);
};

const login = async (req, res) => {
  const { status, token } = await userServices.login(req.body);
  return res.status(status).json(token);
};

module.exports = {
  getAllUsers,
  getById,
  createNewUser,
  login,
};