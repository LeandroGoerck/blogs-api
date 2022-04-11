const userServices = require('../services/userServices');

const getAllUsers = async (_req, res) => {
  const { status, userData } = await userServices.getAllUsers();
  return res.status(status).json(userData);
};

const createNewUser = async (req, res) => {
  const { status, createdUser } = await userServices.createNewUser(req.body);
  return res.status(status).json(createdUser);
};

module.exports = {
  getAllUsers,
  createNewUser,
};