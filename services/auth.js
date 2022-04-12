const jwt = require('jsonwebtoken');
const ERR = require('./errorMessages');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

require('dotenv');

const generateToken = (email, password) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const tokenNum = jwt.sign({ email, password }, JWT_SECRET, jwtConfig);
  return ({ token: tokenNum });
};

const checkLoginFields = (email, password) => {
  if (email === '') throw ERR.EMAIL_IS_NOT_ALLOWED_TO_BE_EMPTY;
  if (!email) throw ERR.EMAIL_IS_REQUIRED;
  if (password === '') throw ERR.PASSWORD_IS_NOT_ALLOWED_TO_BE_EMPTY;
  if (!password) throw ERR.PASSWORD_IS_REQUIRED;
};

const checkJWT = async (authorization) => {
  if (!authorization) throw ERR.TOKEN_NOT_FOUND;
    console.log('authorization', authorization, 'JWT_SECRET', JWT_SECRET);
    const verifyToken = jwt.verify(authorization, JWT_SECRET);
    console.log('\nverifyToken: ', verifyToken);
  return true;
};

module.exports = {
  generateToken,
  checkLoginFields,
  checkJWT,
};