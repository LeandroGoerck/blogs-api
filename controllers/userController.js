const userServices = require('../services/userServices');
const authServices = require('../services/auth');

const getAllUsers = async (req, res) => {
  const { authorization } = req.headers;
  const isLogged = await authServices.checkJWT(authorization);
  if (isLogged) {
    const userData = await userServices.getAllUsers();
    res.status(200).json(userData);
  }
};

const getById = async (req, res) => {
  const { authorization } = req.headers;
  const isLogged = await authServices.checkJWT(authorization);
  if (isLogged) {
    const { id } = req.params;
    console.log('id: ', id);
    const foundUser = await userServices.getById(id);
    res.status(200).json(foundUser);
  }
};

const createNewUser = async (req, res) => {
  const createdUser = await userServices.createNewUser(req.body);
  return res.status(201).json(createdUser);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await userServices.login({ email, password });
  return res.status(200).json(token);
};

const deleteCurrentUser = async (req, res) => {
  const { authorization } = req.headers;
  const loggedUserId = await authServices.checkJWT(authorization);
  if (loggedUserId) {
    await userServices.deleteCurrentUser(loggedUserId);
    return res.status(204).end();
  }
};

module.exports = {
  getAllUsers,
  getById,
  createNewUser,
  login,
  deleteCurrentUser,
};