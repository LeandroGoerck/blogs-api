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

const checkEmail = (email) => {
  if (!email) throw ERR.EMAIL_IS_REQUIRED;
  if (!/\S+@\S+\.\S+/.test(email)) throw ERR.EMAIL_MUST_BE_VALID;
};

const checkPassword = (password) => {
  if (!password) throw ERR.PASSWORD_IS_REQUIRED;
  if (password.length < 6) throw ERR.PASSWORD_LENGTH_MUST_BE_6_CHARACTERS_LONG;
};

const checkDisplayName = (displayName) => {
  if (displayName.length < 8) throw ERR.DISPLAY_NAME_LENGTH_MUST_BE_AT_LEAST_8;
};

const createNewUser = async (userData) => {
  const { displayName, email, password } = userData;
  checkEmail(email);
  checkPassword(password);
  checkDisplayName(displayName);
  const emailFound = await User.findOne({ where: { email } });
  if (emailFound) throw ERR.USER_ALREADY_REGISTERED;
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