const { User } = require('../models');
const ERR = require('../errors/errorMessages');

const getAllUsers = async () => {
  const userData = await User.findAll();
  // const userData = { user: 'data' };
  return {
    status: 200,
    userData,
  };
};

const createNewUser = async (userData) => {
  const { displayName, email,password, image } = userData;
  if (displayName.length < 8) throw ERR.DISPLAY_NAME_LENGTH_MUST_BE_AT_LEAST_8;
  const createdUser = await User.create(userData);
  return {
    status: 201,
    createdUser,
  };
};

module.exports = {
  getAllUsers,
  createNewUser,
};