const { User } = require('../models');

const getAllUsers = async () => {
  const userData = await User.findAll();
  // const userData = { user: 'data' };
  return {
    status: 200,
    userData,
  };
};
const createNewUser = async () => {
  const createdUser = await { nothing: 'here' };
  return {
    status: 200,
    createdUser,
  };
};

module.exports = {
  getAllUsers,
  createNewUser,
};