const { User } = require('../models');
const ERR = require('./errorMessages');
const auth = require('./auth');

const getAllUsers = async () => {
  const userData = await User.findAll();
  return userData;
};

const getById = async (id) => {
  const foundUser = await User.findByPk(id);
  if (!foundUser) throw ERR.USER_DOES_NOT_EXIST;
  return foundUser;
};

const checkEmail = (email) => {
  console.log('checking email', email);
  if (!email) throw ERR.EMAIL_IS_REQUIRED;
  if (!/\S+@\S+\.\S+/.test(email)) throw ERR.EMAIL_MUST_BE_VALID;
};

const checkPassword = (password) => {
  console.log('checking password', password);
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
  return createdUser;
};

const login = async (data) => {
  auth.checkLoginFields(data.email, data.password);
  const { email } = data;
  const userEmailFound = await User.findOne({ where: { email } });
  if (!userEmailFound) throw ERR.INVALID_FIELDS;
  const token = auth.generateToken(data.email, data.password);
  return token;
};

const deleteCurrentUser = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  getAllUsers,
  getById,
  createNewUser,
  login,
  deleteCurrentUser,
};